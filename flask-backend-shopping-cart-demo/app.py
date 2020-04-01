from flask import Flask, jsonify, request
from mongoDatabase.app import requestDB
import json

requestDict = {
        "RequestType": "GetProducts",                    # possible values are GetProductData and GetBrandsName
        "Filters":[] ,     #Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": [],                                          #will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 25
    }
print(requestDB(requestDict))

app = Flask(__name__)
#app.run(debug=True)

def initializeRequestDict(args):
    #true_val if condition else false_val
    requestDict["RequestType"] = args["RequestType"] if ("RequestType" in args) else "GetProducts" #args are the parameters after ?

    requestDict["Filters"] = json.loads(args["Filters"]) if ("Filters" in args) else []
    requestDict["BrandsFilter"] = json.loads(args["BrandsFilter"]) if ("BrandsFilter" in args) else []
    requestDict["CurrentPage"] = int(args["CurrentPage"]) if ("CurrentPage" in args) else 1
    requestDict["ProductPerPage"] = int(args["ProductPerPage"]) if ("ProductPerPage" in args) else 25


@app.route('/', methods=('GET', 'POST'))
def home():
    requestDict = {
        "RequestType": "GetProducts",  # possible values are GetProductData and GetBrandsName
        "Filters": [],
        # Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": [],  # will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 25
    }
    return jsonify(requestDB(requestDict))


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
