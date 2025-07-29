from flask import Blueprint, request, jsonify, g
from app.models import db, Product

routes = Blueprint('routes', __name__)


@routes.route("/products", methods=["POST"])
def add_product():
    """Add a new product to the database."""
    data = request.get_json()
    if not data:
        return jsonify({"status": "FAILED", "message": "Invalid input"}), 400
    
    try:
        product = Product(**data)
        db.session.add(product)
        db.session.commit()
        return jsonify({"status": "SUCCESS", "data": product.to_dict()}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e), "status": "FAILED"}), 500


@routes.route("/products/<int:id>", methods=["GET"])
def get_product(id):
    """Retrieve a product by its ID."""
    product = Product.query.get(id)
    if not product:
        return jsonify({"status": "FAILED", "message": "Product not found"}), 404
    
    return jsonify({"status": "SUCCESS", "data": product.to_dict()}), 200


@routes.route("/products", methods=["GET"])
def list_products():
    """List all products in the database."""
    products = Product.query.all()
    
    return jsonify({"status": "SUCCESS", "data": [product.to_dict() for product in products]}), 200


@routes.route("/products/<int:id>", methods=["PATCH"])
def update_product(id):
    """Update a product in the database"""
    product = Product.query.get(id)
    if not product:
        return jsonify({"status": "FAILED", "message": "Product not found"}), 404
    
    try:
        for key, value in request.json.items():
            setattr(product, key, value)
        db.session.commit()
        return jsonify({"status": "SUCCESS", "data": product.to_dict()}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e), "status": "FAILED"}), 500


@routes.route("/products/<int:id>", methods=["DELETE"])
def delete_product(id):
    """Delete a product from the database."""
    product = Product.query.get(id)
    if not product:
        return jsonify({"status": "FAILED", "message": "Product not found"}), 404
    
    try:
        db.session.delete(product)
        db.session.commit()
        return jsonify({"status": "SUCCESS", "message": "Product deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": str(e), "status": "FAILED"}), 500


@routes.route("/test-products", methods=["GET"])
def test_products():
    """Test route to verify product service is working."""
    user = g.user
    print(user)
    return jsonify({"status": "SUCCESS", "message": "Product service is running ✅"}), 200
