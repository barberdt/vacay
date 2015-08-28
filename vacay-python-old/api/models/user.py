from flask.ext.mongokit import Document
from vacay import db

class User(Document):
    __collection__ = 'users'
    structure = {'name': basestring}
    required_fields = ['name']

db.register([User])
