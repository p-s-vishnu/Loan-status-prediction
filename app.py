from flask import Flask, request
from pickle import load

# Initialize the Flask object
app = Flask(__name__)


@app.route("/")
def root():
    return """This is the root of the API, use the following APIs as per your need<br/>
        1. url/test: It will return a dummy result
            with the correct response structure<br/>
        2. url/calculate [POST]: This is the actual API used for
        predicting the loan status and the probabilistic value"""


@app.route("/test")
def test():
    return "{\"result\":{\"prediction\":1,\"probability\":0.75}}"


@app.route("/calculate", methods=['POST'])
def get_output():
    # When using get, use below
    # a = request.args.get('a')
    # b = request.args.get('b')
    a = request.form['a']
    b = request.form['b']
    file_name = './model.pkl'

    with open(file_name, 'rb') as model_pkl:
        clf = load(model_pkl)

    return str(clf.predict([[a, b]]))

if __name__ == '__main__':
    app.run()
