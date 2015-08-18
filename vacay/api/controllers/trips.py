from .. import api
from bson.errors import InvalidId
from bson.objectid import ObjectId
from flask import jsonify
from vacay import db

@api.route('/trips', methods=['GET'])
def get_all():
    return jsonify({'results': [trip for trip in db.Trip.find()]})

@api.route('/trips/<string:id>', methods=['GET'])
def get_one(id):
    try:
        trip = db.Trip.find_one({'_id': ObjectId(id)})
    except InvalidId:
        response = jsonify({'status': 400, 'message': 'Invalid id.'})
        response.status_code = 400
        return response

    if not trip:
        body = {
            'status': 404,
            'message': 'Could not find trip with id %s', % id
        }
        response = jsonify(body)
        response.status_code = 404
        return response
    else:
        return jsonify(trip)

@api.route('/trips', methods=['POST'])
def create_one():
    new_trip = db.Trip()
    new_trip.update(request.json)
    new_trip.save()
    return new_trip
