import validators
from flask import Blueprint, render_template, request
from flask_cors import CORS

from imagesaver import grab_images

imagesaver_post = Blueprint("imagesaver_bp", __name__)

CORS(imagesaver_post)

@imagesaver_post.route("/imagesaver", methods=["POST"])
def imagesaver():
  data = request.get_json()
  validated_url = validators.url(data["url"])

  if validated_url:
    response = grab_images(data["url"])
    return { 'data': response }
  
  else:
    return 'Please enter a valid URL', 400
    

@imagesaver_post.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
