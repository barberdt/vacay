from .. import api
from flask import jsonify
from vacay import mongo

@api.route('/users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    results = [user for user in users]
    return jsonify({'results': results})

@api.route('/users', methods=['POST'])
def create_user():
    return 'An api endpoint from post.'
