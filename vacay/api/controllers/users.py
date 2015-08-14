from .. import api
from flask import jsonify
from vacay import db

@api.route('/users', methods=['GET'])
def get_users():
    return jsonify({'results': [user for user in db.User.find()]})

@api.route('/users', methods=['POST'])
def create_user():
    return 'An api endpoint from post.'
