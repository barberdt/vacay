from flask import Flask, render_template
from flask.ext.pymongo import PyMongo

app = Flask('vacay')
app.config.from_object('config')
mongo = PyMongo(app)

from frontend import frontend
from auth import auth
from api import api

app.register_blueprint(frontend)
app.register_blueprint(auth)
app.register_blueprint(api)