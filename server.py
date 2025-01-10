# Import the Flask class from the flask module
from flask import Flask, jsonify

# Create an instance of the Flask class, passing in the name of the current module
app = Flask(__name__)

# Define a route for the root URL ("/")
@app.route("/")
def index():
    # Function that handles requests to the root URL
    # Creta a dictionary to return as a response
    return {"message": "Hello World!"}
