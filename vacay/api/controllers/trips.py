from .. import api
from flask import jsonify
from vacay import mongo

@api.route('/trips', methods=['GET'])
def get_trips():
