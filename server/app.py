import flask
import os
from flask import jsonify, request , render_template
from flask import flash, redirect, url_for, session
from joblib import load
import requests, json
import pandas as pd
import requests
import random
import subprocess
import glob
from random import random
import re
import os
import numpy as np
import sklearn
import joblib
import requests
import time
from sentiment import TweetAnalyzer


app = flask.Flask(__name__ )
app.secret_key = 'super secret key'


#Classifiers
classifier = joblib.load('svmClassifier.pkl')
tweet_analyzer = TweetAnalyzer()

@app.route("/")
def home():
    return "<h1>Running Flask on Google Colab! with " + 'Hello' + "</h1>" 
  
@app.route('/test', methods=['POST'])
def test():

    dirty_data = request.get_json()['data']
    tweet_df = tweet_analyzer.tweets_to_data_frame(dirty_data)

    print('tweet df' , tweet_df)

    tweet_df['sentiment'] = np.array([tweet_analyzer.analyze_sentiment(tweet, classifier) for tweet in tweet_df['tweets']])

    print(tweet_df.head(10))
    clean_data = []

    for index, row in tweet_df.iterrows():

      if row['sentiment'] == 0:
        # print( 'bad sentiment', row['tweets'] )
        clean_data.append( [ { 'id' : row['id'] , 'text' : row['tweets'] } ] )

    
    for clean in clean_data:
      print('cleaning ->', clean)

    return jsonify( clean_data )





if __name__ == '__main__':
    app.run()
