from .. import api
from vacay import mongo

@api.route('/users', methods=['GET'])
def get_users():
    return mongo.db.users.find_one().get('name')

@api.route('/users', methods=['POST'])
def create_user():
    return 'An api endpoint from post.'
