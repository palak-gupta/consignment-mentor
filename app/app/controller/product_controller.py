from flask import ( Blueprint, request, jsonify)
from app import db
from app.schema import products_schema, product_schema
from app.models import Product
from marshmallow import ValidationError

product = Blueprint('products', __name__)
@product.route('/', methods=['GET'])
def get_products():
    product_records = Product.query.all()
    return (jsonify(products=products_schema.dump(product_records)), 200) if product_records else ({'message': 'No Products found'}, 404)

@product.route('/<int:pk>', methods=['GET'])
def get_product(pk):
    product_record = Product.query.get(pk)
    return (jsonify(product=product_schema.dump(product_record)), 200) if product_record else ({'message': 'Product not found'}, 404)

@product.route('/', methods=['POST'])
def create_product():
    request_json = request.get_json()
    if not request_json:
        return {'message': 'No data was passed'}, 400
    try:
        product_schema.load(request_json)
    except ValidationError as err:
        return err.messages, 422
    product_record = Product(name=request_json['name'])
    db.session.add(product_record)
    db.session.commit()
    product_record = Product.query.filter(Product.id == product_record.id).one()
    return jsonify(product=product_schema.dump(product_record)), 201
