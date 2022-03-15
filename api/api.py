from flask import Flask, render_template, request;
from app import grab_images;
from flask_cors import CORS;

app = Flask(__name__);
CORS(app);

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.route("/imagesaver", methods=["POST"])
def imagesaver():
  data = request.get_json();

  print("this is data", data["url"]);
    
  grab_images(data["url"]);
  
  return {200: 'grabbed images'}

if __name__ == "__main__":
  app.run(debug=True);