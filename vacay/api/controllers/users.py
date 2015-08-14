from .. import api
from bson.errors import InvalidId
from bson.objectid import ObjectId
from flask import jsonify
from vacay import db
from vacay import app

@api.route('/users', methods=['GET'])
def get_users():
    return jsonify({'results': [user for user in db.User.find()]})

@api.route('/users/<string:id>', methods=['GET'])
def get_user(id):
    try :
        user = db.User.find_one({'_id': ObjectId(id)})
    except InvalidId:
        response = jsonify({'status': 400, 'message': 'Invalid id.'})
        response.status_code = 400
        return response

    if not user:
        body = {
            'status': 400,
            'message': 'Could not find user with id %s' % id
        }
        response = jsonify(body)
        response.status_code = 404
        return response
    else:
        return jsonify(user)

@api.route('/users', methods=['POST'])
def create_user():
    return 'An api endpoint from post.'
