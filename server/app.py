import flask
import os
from flask import jsonify, request , make_response
from flask import flash, redirect, url_for, session , render_template
from flask_cors import CORS, cross_origin
import requests, json





app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.secret_key = 'super secret key'
cors = CORS(app, resources={r"/*": {"origins": "*"}})




@app.route('/test', methods=['POST'])
def test():

    dirty_data = request.get_json()['data']
    clean_data = []
    for dd in dirty_data:

        #remove extra spaces
        txt = dd['txt'].strip()

        #just censor the word Kunal ( just for test )
        if len( txt ) != 0 and ('kunal' in txt or 'Kunal' in txt):
            txt = txt.replace('kunal', '*****')
            txt = txt.replace('Kunal', '*****')
            clean_data.append( { 'id': dd['id'] , 'txt': txt } )

    print(clean_data)

    return jsonify( clean_data )



if __name__ == '__main__':
    app.run()
