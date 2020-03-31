from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route('/', methods=('GET', 'POST'))
def hello_world():
    if request.method == 'GET':
        print(request)
        return jsonify({'sameer': 'sameer'})

    if request.method == 'POST':
        jsonData = request.get_json()
        print(jsonData)
        return jsonify({'sameer': 'sameer'})


@app.route('/filter', methods=('GET', 'POST'))
def func():
    print(request.args["filter"])           #args are the parameters after ?
    return jsonify({'sameer': 'sameer'})


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


if __name__ == '__main__':
    app.run()
