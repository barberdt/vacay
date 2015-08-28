from flask.ext.mongokit import Document
from vacay import db

class Trip(Document):
    __collection__ = 'trips'
    structure = {'name': basestring}
    required_fiels = ['name']

db.register([Trip])
