from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/users')
def temp():
  return 'An api endpoint.'