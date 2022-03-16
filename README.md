# Getting Started with Imagesaver

A simple application that retrieves image files from websites.

Stack used: Python3, Flask, React

## How to start: install packages

In the project directory, install react packages:

`npm install`

In the api directory, install the requirements into a virtualenv or your environment of choice, then run:
_For best experience, please use pip3_

#### MacOS:

`source venv/bin/activate`

`pip3 install -r requirements.txt`

#### Windows:

`source venv/scripts/activate`

`pip3 install -r requirements.txt`

## Start the local servers
_Must `cd ..` back into imagesaver2 directory before running npm scripts_

Start the backend:

`npm run start-api`

In a new terminal, start the frontend:

`npm start`

The application will be live on `http://localhost:3000`.

Enter the full url and click the button to grab images. Once the images are retrieved, they will download to the downloads folder and a log will be added to the api folder (`api/downloaded.txt`). A Gallery will be updated with the downloaded photos.

The download folder will create a new folder and overwrite the contents.

Some example websites used to test:

- https://stocksnap.io
- https://www.ufc.com
- https://www.google.com - Success case, but 0 files downloaded
