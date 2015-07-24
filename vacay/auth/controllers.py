from flask import Blueprint, render_template
from vacay import mongo

auth = Blueprint('auth', __name__, template_folder='templates')

@auth.route('/login')
def index():
    return render_template('login.html')
