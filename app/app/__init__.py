from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
app.config.from_object('config')
CORS(app)
db = SQLAlchemy(app)
mp = Marshmallow(app)
migrate = Migrate(app, db)
from app import models
from app import controller
from app import schema
