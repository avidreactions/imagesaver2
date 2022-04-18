# Getting Started with Imagesaver

A simple application that retrieves image files from websites.

Stack used: Python3, Flask, React

## How to start: install packages

In the project directory, install react packages:
_Please run npm install as new packages and updates may have been added_

`npm install`

In the api directory, install the requirements into a virtualenv or your environment of choice, then run:
_For best experience, please use pip3_

#### MacOS example:

`source venv/bin/activate`

`pip3 install -r requirements.txt`

#### Windows example:

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

#### Todos / Caveats:

- `.flaskenv` would normally be pushed up as a template with easy to fill in keys and passwords. It has been pushed to git to keep things simple. This would not be viewable / pushed to github normally.

- Detailed error handling by the server would help with understanding the reasons why an image maybe missing or unable to download. Currently the errorhandling only shows success and one error. I wasn't sure how to approach this one with the limited time given.

- Need to add Black for python linting. The frontend has prettier linting that would need some extra configurations to match current syntactical standards and practices.

- Moved inline styling out of the MUI5 and into the `gallery.css` for the Gallery component. the `SX` prop is recommended for overwriting css styling in the new MUIv5. This type of styling would be very efficient with functional components that require their own styling override from the default styled theme.

- `Downloads` folder and `downloads.txt` log file has been added to `.gitignore`. These files have been pushed not knowing that they should be ignored.
