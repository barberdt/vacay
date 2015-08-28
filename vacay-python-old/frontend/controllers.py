from flask import Blueprint, render_template

frontend = Blueprint('frontend', __name__, template_folder='templates')

@frontend.route('/', defaults={'path': ''})
@frontend.route('/<path:path>')
def entry(path):
    return render_template('index.html')
