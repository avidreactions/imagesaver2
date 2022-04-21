from flask import Flask

from blueprint import imagesaver_post


def test_post_route_success():
  app = Flask(__name__);
  app.register_blueprint(imagesaver_post, url_prefix="")
  app.config['DEBUG'] = True
  app.config['TESTING'] = True
  client =  app.test_client();
  url = "/imagesaver"; 

  mock_headers = {
        'Content-Type': 'application/json'
    }

  mock_request_data = {
    "url": "https://www.ufc.com"
  }
  response = client.post(url, json=mock_request_data, headers=mock_headers);
  assert response.status_code == 200;

def test_post_route_failure():
  app = Flask(__name__);
  app.register_blueprint(imagesaver_post, url_prefix="")
  app.config['DEBUG'] = True
  app.config['TESTING'] = True
  client =  app.test_client();
  url = "/imagesaver"; 

  mock_request_data = {
    "url": "http://asdfasdf"
  }
  response = client.post(url, json=mock_request_data);
  assert response.status_code == 400;
