from .. import api
from vacay import mongo

@api.route('/trips', methods=['GET'])
def get_trips():
  return mongo.db.trips.find_one().get('name')