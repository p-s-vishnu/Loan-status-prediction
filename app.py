from flask import Flask, request
from flasgger import Swagger
from pickle import load
import pandas as pd
import model

file_name = './model.pkl'
# read as binary
with open(file_name, 'rb') as model_pkl:
    clf = load(model_pkl)

# Initialize the Flask object
app = Flask(__name__)
swagger = Swagger(app)

# @app.route("/")
# def root():
#     return """This is the root of the API, use the following APIs as per your need<br/>
#         1. url/test: It will return a dummy result
#             with the correct response structure<br/>
#         2. url/calculate [POST]: This is the actual API used for
#         predicting the loan status and the probabilistic value"""


# @app.route("/test")
# def test():
#     return "{\"result\":{\"prediction\":1,\"probability\":0.75}}"


# @app.route("/calculate", methods=['POST'])
@app.route("/calculate")
def get_output():
    """Example endpoint returning a prediction of loan status.
    ---
    parameters:
      - name: ApplicantIncome
        in: query
        type: number
        required: true
      - name: CoapplicantIncome
        in: query
        type: number
        required: true
    responses:
      500:
        description: Error!
      200:
        description: Loan status predicted
        
    """
    # a = request.form['a']
    # b = request.form['b'].
    a = request.args.get('ApplicantIncome')
    b = request.args.get('CoapplicantIncome')

    return str(clf.predict([[float(a), float(b)]]))
  
@app.route("/calculate_file", methods=['POST'])
def get_file_output():
    df = pd.read_csv(request.files.get('input_file'),header=None)
    return str(list(clf.predict(df)))


if __name__ == '__main__':
    app.run()
