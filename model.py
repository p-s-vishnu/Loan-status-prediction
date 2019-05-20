from flask import Flask

# Initialize Flask object
app = Flask(__name__)

@app.route("/")
def default():
    return "{\"result\":{\"prediction\":1,\"probability\": 0.75}}"

@app.route("/calculate")
def calculate():
    return "Work in progress"

if __name__ == '__main__':
    app.run()