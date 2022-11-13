from flask import Blueprint, url_for, render_template

views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template("index.html")
