from flask import Blueprint

api = Blueprint('api', __name__, url_prefix='/api')

import controllers
import models