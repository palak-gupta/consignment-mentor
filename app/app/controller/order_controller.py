from crypt import methods
from flask import ( Blueprint, request, jsonify)
from app import db
from app.schema import orders_schema, order_schema
from app.models import Order
from marshmallow import ValidationError

order_blureprint = Blueprint('orders', __name__)

@order_blureprint.route('/', methods=['GET'])
def get_orders():
    order_records = Order.query.all()
    return (jsonify(orders=orders_schema.dump(order_records)), 200) if order_records else ({'message': 'No orders found'}, 404)

@order_blureprint.route('/<int:pk>', methods=['GET'])
def get_order(pk):
    order_record = Order.query.get(pk)
    return (jsonify(order=order_schema.dump(order_record)), 200) if order_record else ({'message': 'Order not found'}, 404)

@order_blureprint.route('/', methods=['POST'])
def create_order():
    request_json = request.get_json()
    try:
        order_record = order_schema.load(request_json)
    except ValidationError as err:
        return (err.messages, 422)
    db.session.add(order_record)
    db.session.commit()
    order_record = Order.query.get(order_record.id)
    return jsonify(order=order_schema.dump(order_record)), 201
