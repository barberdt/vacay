from flask import Flask, render_template
# from flask.ext.pymongo import PyMongo
from flask.ext.mongokit import MongoKit
from utils.json_encoder import CustomJSONEncoder

app = Flask('vacay')
app.config.from_object('config')
app.json_encoder = CustomJSONEncoder
db = MongoKit(app)

# Blueprints, must be imported after creation of app and mongo
from frontend import frontend
from auth import auth
from api import api

app.register_blueprint(frontend)
app.register_blueprint(auth)
app.register_blueprint(api)
