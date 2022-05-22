from flask import ( Blueprint, request, jsonify )
from app import db
from app.models import Retailer
from app.schema import retailer_schema, retailers_schema
from marshmallow import ValidationError

retailer_blueprint = Blueprint('retailer', __name__)

@retailer_blueprint.route('/', methods=['GET'])
def get_retailers():
    retailer_records = Retailer.query.all()
    return (jsonify(retailers=retailers_schema.dump(retailer_records)), 200) if retailer_records else ({'message': 'No Retailers found'}, 404)

@retailer_blueprint.route('/<int:pk>', methods=['GET'])
def get_retailer(pk):
    retailer_record = Retailer.query.get(pk)
    return (jsonify(retailer=retailer_schema.dump(retailer_record)), 200) if retailer_record else ({'message': 'Retailer not found'}, 404)

@retailer_blueprint.route('/', methods=['POST'])
def create_retailer():
    request_json = request.get_json()
    try:
        retailer_schema.load(request_json)
    except ValidationError as err:
        return err.messages, 422
    
    retailer_record = Retailer(name=request_json['name'], mobile_number=request_json['mobile_number'])
    db.session.add(retailer_record)
    db.session.commit()
    retailer_record = Retailer.query.get(retailer_record.id)
    return jsonify(retailer=retailer_schema.dump(retailer_record)), 201
