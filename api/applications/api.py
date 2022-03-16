from flask import Flask, render_template, request;
from imagesaver import grab_images;
from flask_cors import CORS;

app = Flask(__name__);
CORS(app);

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.route("/imagesaver", methods=["POST"])
def imagesaver():
  data = request.get_json();

  response = grab_images(data["url"]);

  return { 'data': response }

if __name__ == "__main__":
  app.run(debug=True);