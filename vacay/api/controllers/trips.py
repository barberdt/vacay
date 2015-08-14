from .. import api
from flask import jsonify
from vacay import db

@api.route('/trips', methods=['GET'])
def get_trips():
    return jsonify({'results': [trip for trip in db.Trip.find()]})
