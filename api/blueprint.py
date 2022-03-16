from flask import Blueprint, request, render_template;
from imagesaver import grab_images;
from flask_cors import CORS;

imagesaver_post = Blueprint("imagesaver_bp", __name__);

CORS(imagesaver_post);

@imagesaver_post.route("/imagesaver", methods=["POST"])
def imagesaver():
  data = request.get_json();

  response = grab_images(data["url"]);
  
  if len(response) > 0:
    return { 'data': response };
  
  if len(response) == 0:
    return 'Could not download images', 418;

@imagesaver_post.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404