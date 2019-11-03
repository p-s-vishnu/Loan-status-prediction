# import necessary files
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from os import listdir
import pickle

# load data
path = './'
df = pd.read_csv(path+'train.csv')
X = df[['ApplicantIncome', 'CoapplicantIncome']]
y = df[['Loan_Status']].apply(LabelEncoder().fit_transform)
y.shape

# split into test train
X_train, X_test, y_train, y_test = train_test_split(X, np.ravel(y),
                                                    random_state=42,
                                                    test_size=0.2)

# build model
clf = RandomForestClassifier(n_estimators=10)

# train the classifier
clf.fit(X_train, y_train)

# predictions
predicted = clf.predict(X_test)

# accuracy
print(accuracy_score(y_test, predicted))

# pickle the model
# create a file object called model_pkl
with open(path+'model.pkl', 'wb') as model_pkl:
    pickle.dump(clf, model_pkl)
