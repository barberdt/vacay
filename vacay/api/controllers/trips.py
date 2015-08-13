from .. import api


@api.route('/trips', methods=['GET'])
def get_trips():
    return 'Trips'
