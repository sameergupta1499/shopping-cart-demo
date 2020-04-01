from flask import Flask, jsonify, request
from mongoDatabase.app import requestDB
import json

requestDict = {
        "RequestType": "",                    # possible values are GetProductData and GetBrandsName
        "Filters":[] ,     #Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": [],                                          #will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 5
    }
print(requestDB(requestDict))

app = Flask(__name__)
#app.run(debug=True)

def initializeRequestDict(args):
    requestDict["RequestType"] = args["RequestType"]   #args are the parameters after ?
    requestDict["Filters"] = json.loads(args["Filters"])
    requestDict["BrandsFilter"] = json.loads(args["BrandsFilter"])
    requestDict["CurrentPage"] = int(args["CurrentPage"])
    requestDict["ProductPerPage"] = int(args["ProductPerPage"])


@app.route('/', methods=('GET', 'POST'))
def hello_world():
    if request.method == 'GET':
        print("hello")
        print(request.args["RequestType"])
        return jsonify({'sameer': 'sameer'})

    if request.method == 'POST':
        jsonData = request.get_json()
        print(jsonData)
        return jsonify({'sameer': 'sameer'})


@app.route('/Page=<page>', methods=('GET', 'POST'))
def func(page):
    initializeRequestDict(request.args)
    return jsonify(requestDB(requestDict))


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


if __name__ == '__main__':
    app.run(debug=True)
