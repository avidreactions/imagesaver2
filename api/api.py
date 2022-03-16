from flask import Flask;

from blueprint import imagesaver_post;

app = Flask(__name__);
app.register_blueprint(imagesaver_post, url_prefix="")

if __name__ == "__main__":
  app.run(debug=True);