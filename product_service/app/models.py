from flask_sqlalchemy import SQLAlchemy
from generated.product import product_pb2
from app.db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(500), nullable=True)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        """Convert the Product instance to a dictionary representation."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def to_proto(self):
        """Convert the Product instance to a protobuf representation."""
        return product_pb2.Product(
            id=self.id,
            name=self.name,
            description=self.description,
            price=self.price,
            quantity=self.quantity
        )