requestDict = {
        "RequestTypea": "GetProducts",                    # possible values are GetProductData and GetBrandsName
        "Filters":["BrandsFilter"] ,     #Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": ["Samsung","Mi"],                                          #will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 5
}

print("RequestType" in requestDict)



"""import json

str='["Samsung","Mi"]'
str = json.loads(str)
print(str)
from mongoDatabase.app import requestDB

requestDict = {
        "RequestType": "GetProducts",                    # possible values are GetProductData and GetBrandsName
        "Filters":["BrandsFilter"] ,     #Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": ["Samsung","Mi"],                                          #will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 5
    }
print(type(requestDict["Filters"]),requestDict["Filters"])
print(requestDB(requestDict))
"""