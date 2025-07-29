import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'generated')))

import grpc
from generated.product import product_pb2, product_pb2_grpc
from app.models import db, Product

class ProductService(product_pb2_grpc.ProductServiceServicer):
    def __init__(self, app):
        self.app = app
    def AddProduct(self, request, context):
        """Add a new product to the database."""
        try:
            with self.app.app_context():
                product = Product(
                    name=request.name,
                    description=request.description,
                    price=request.price,
                    quantity=request.quantity
                )
                db.session.add(product)
                db.session.commit()
                return product_pb2.ProductResponse(product=product.to_proto())
        except Exception as e:
            context.set_details(str(e))
            context.set_code(grpc.StatusCode.INTERNAL)
            return product_pb2.Product()

    def GetProduct(self, request, context):
        """Retrieve a product by its ID."""
        print('---------------------------arrived here---------------------------')
        with self.app.app_context():
            try:
                print(f'ProductId: {request.id}')
                product = Product.query.get(request.id)
                if not product:
                    context.set_details("Product not found")
                    context.set_code(grpc.StatusCode.NOT_FOUND)
                    return product_pb2.Product()
    
                return product_pb2.ProductResponse(product=product.to_proto())
            except Exception as e:
                context.set_details(str(e))
                context.set_code(grpc.StatusCode.INTERNAL)
                return product_pb2.Product()

    def ListProducts(self, request, context):
        """List all products in the database."""
        with self.app.app_context():
            products = Product.query.all()
            if not products:
                context.set_details("No products found")
                context.set_code(grpc.StatusCode.NOT_FOUND)
                return product_pb2.ProductList(products=[])
    
            return product_pb2.ProductListResponse(products=[product.to_proto() for product in products])

    def UpdateProduct(self, request, context):
        """Update a product in the database."""
        with self.app.app_context():
            product = Product.query.get(request.id)
            if not product:
                context.set_details("Product not found")
                context.set_code(grpc.StatusCode.NOT_FOUND)
                return product.to_proto()
    
            try:
                for field in ["name", "description", "price", "quantity"]:
                    setattr(product, field, getattr(request, field))
                db.session.commit()
                return product_pb2.ProductResponse(product=product.to_proto())
            except Exception as e:
                context.set_details(str(e))
                context.set_code(grpc.StatusCode.INTERNAL)
                return product.to_proto()
    
    def UpdateProductsQuantity(self, request, context):
        """
        using a list of dict of product IDs and quantities, update their quantity in the database based on status:
        increase or decrease.
        data ->{items: {"id": 1, "quantity": 10}, {"id": 2, "quantity": 5}, status: "increase"}
        """
        with self.app.app_context():
            try:
                for item in request.items:
                    product = Product.query.get(item.id)
                    if product:
                        if request.status == "completed":
                            product.quantity += item.quantity
                    db.session.commit()
                
                updated_products = [product.to_proto() for item in request.items for product in Product.query.filter_by(id=item.id).all()]
                return product_pb2.ProductListResponse(products=updated_products)
            except Exception as e:
                context.set_details(str(e))
                context.set_code(grpc.StatusCode.INTERNAL)
                return product_pb2.ProductListResponse()
