from .. import api
from bson.errors import InvalidId
from bson.objectid import ObjectId
from flask import jsonify, request
from vacay import db
from vacay import app

@api.route('/users', methods=['GET'])
def get_all():
    return jsonify({'results': [user for user in db.User.find()]})

@api.route('/users/<string:id>', methods=['GET'])
def get_one(id):
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
def create_one():
    new_user = db.User()
    new_user.update(request.json)
    new_user.save()
    return jsonify(new_user)
