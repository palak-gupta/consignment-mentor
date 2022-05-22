from app import app
from app.controller.product_controller import product
from app.controller.retailer_controller import retailer_blueprint
from app.controller.order_controller import order_blureprint

app.register_blueprint(product, url_prefix='/products')
app.register_blueprint(retailer_blueprint, url_prefix='/retailers')
app.register_blueprint(order_blureprint, url_prefix='/orders')