from marshmallow import fields, validate, pre_load, post_load, post_dump, EXCLUDE, ValidationError
from app import mp
from app.models import (Product, Retailer, Order)

class ProductSchema(mp.SQLAlchemyAutoSchema):
    class Meta:
        model = Product
        unknown = EXCLUDE
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

class RetailerSchema(mp.SQLAlchemyAutoSchema):
    class Meta:
        model = Retailer
        unknown = EXCLUDE
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    mobile_number = fields.Str(required=True, validate=validate.Length(equal=10))

retailer_schema = RetailerSchema()
retailers_schema = RetailerSchema(many=True)

class OrderSchema(mp.SQLAlchemyAutoSchema):
    class Meta:
        model = Order
        unknown = EXCLUDE
    id = fields.Int(dump_only=True)
    product_id = fields.Int(load_only=True)
    retailer_id = fields.Int(load_only=True)
    product = fields.Nested(ProductSchema, dump_only=True)
    retailer = fields.Nested(RetailerSchema, dump_only=True)
    rate = fields.Float(required=True, validate=validate.Range(min=0))
    quantity = fields.Int(required=True, validate=validate.Range(min=0))
    
    @pre_load
    def process_input(self, data, **kwargs):
        product_record = Product.query.get(data['product_id'])
        retailer_record = Retailer.query.get(data['retailer_id'])
        if not ( product_record and retailer_record ):
            raise ValidationError('Invalid Product or Retailer')
        return data
    
    @post_load
    def create_object(self, data, **kwargs):
        order_record = Order(rate=data['rate'], quantity=data['quantity'],
                             product_id=data['product_id'], retailer_id=data['retailer_id'])
        return order_record

order_schema = OrderSchema()
orders_schema = OrderSchema(many=True)
