from . import api

@api.route('/users')
def temp():
  return 'An api endpoint.'