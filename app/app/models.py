from app import db

class Product(db.Model):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    orders = db.relationship('Order', backref='product', lazy=True)
    
    def __init__(self, name):
        self.name = name
    
    def __repr__(self) -> str:
        return f'Product({self.id}) - {self.name}'
    
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Retailer(db.Model):
    __tablename__ = 'retailers'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    mobile_number = db.Column(db.String(10))
    orders = db.relationship('Order', backref='retailer', lazy=True)
    
    def __init__(self, name, mobile_number):
        self.name = name
        self.mobile_number = mobile_number
    
    def __repr__(self) -> str:
        return f'Retailer({self.id}) - {self.name}'
    
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'mobile_number': self.mobile_number
        }
terms_of_service = db.Table('terms', 
                            db.Column('terms_of_service_id', db.Integer, db.ForeignKey('terms_of_services.id'), primary_key=True),
                            db.Column('order_id', db.Integer, db.ForeignKey('orders.id'), primary_key=True)
                            )
class TermsOfService(db.Model):
    __tablename__ = 'terms_of_services'
    
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String)
    
    def __init__(self, description):
        self.description = description
    
    def __repr__(self) -> str:
        return f'TOS ({self.id}) - {self.description}'
    
    def serialize(self):
        return {
            'id': self.id,
            'description': self.description
        }

class Order(db.Model):
    __tablename__ = 'orders'
    
    id = db.Column(db.Integer, primary_key=True)
    retailer_id = db.Column(db.Integer, db.ForeignKey('retailers.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    terms_of_service_ids = db.relationship('TermsOfService', secondary=terms_of_service, lazy='subquery',
                                          backref=db.backref('orders', lazy=True))
    rate = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    status = db.Column(db.Boolean)
    
    def __init__(self, retailer_id, product_id, rate, quantity):
        self.retailer_id = retailer_id
        self.product_id = product_id
        self.rate = rate
        self.quantity = quantity
    
    def __repr__(self) -> str:
        return f'Order ({self.id}) '
    
    def serialize(self):
        return {
            'id': self.id,
            'retailer_id': self.retailer_id,
            'product_id': self.product_id,
            'rate': self.rate,
            'quantity': self.quantity,
            'status': self.status
        }