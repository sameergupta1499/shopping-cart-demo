from flask import Flask, jsonify, request
from mongoDatabase.app import requestDB
from requestDict import requestDictConst
import json

app = Flask(__name__)
#app.run(debug=True)

def initializeRequestDict(args):
    #true_val if condition else false_val
    requestDict = requestDictConst.copy()
    requestDict["RequestType"] = args["RequestType"] if ("RequestType" in args) else requestDictConst["RequestType"]     #args are the parameters after ?
    requestDict["Filters"] = json.loads(args["Filters"]) if ("Filters" in args) else requestDictConst["Filters"]
    requestDict["BrandsFilter"] = json.loads(args["BrandsFilter"]) if ("BrandsFilter" in args) else requestDictConst["BrandsFilter"]
    requestDict["CurrentPage"] = int(args["CurrentPage"]) if ("CurrentPage" in args) else requestDictConst["CurrentPage"]
    requestDict["ProductPerPage"] = int(args["ProductPerPage"]) if ("ProductPerPage" in args) else requestDictConst["ProductPerPage"]
    return requestDict



@app.route('/Products/Phone', methods=('GET', 'POST'))
def func():

    return jsonify(requestDB(initializeRequestDict(request.args)))


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


if __name__ == '__main__':
    app.run(debug=True)
