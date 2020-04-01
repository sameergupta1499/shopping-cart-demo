from pymongo import MongoClient
from createInitialDBFromJson import createDB
from mongoDBURI import mongoDBURI






###################################################create DB if DB doesn't exist##############################################################
def checkDBExist(client):
    dblist = client.list_database_names()  # Get list of DB in the mongoDB
    if "shopping-cart-db" not in dblist:
        createDB(client)                      # createDB() is a function in createInitialDBFromJson.py file

################################################################# DB EXISTS######################################################################################

def requestDB(requestDict):
    # connection to the mongodb.com cluster
    print(type(requestDict))
    client = MongoClient(mongoDBURI)  # add your db string
    checkDBExist(client)              #create db if doesn't exists
    shoppingDB = client["shopping-cart-db"]
    phoneCollection = shoppingDB["phones"]
    #print(requestDict,phoneCollection)
    responseDict={"Products": [],
                  "TotalProducts": 0}
    filters=requestDict["Filters"]
    productPerPage=requestDict["ProductPerPage"]
    skipValue=productPerPage*(requestDict["CurrentPage"]  -1)


    ########################################## Get Brands Name Only ########################################
    if requestDict["RequestType"] == "GetBrandsName":
        productsCursor = phoneCollection.distinct("Brand_name")
        responseDict["Products"] = productsCursor
        responseDict["TotalProducts"] = len(productsCursor)
        return responseDict


    ####################### When No Filter is applied.########################
    if filters == []:
        productsCursor = phoneCollection.find().skip(skipValue).limit(productPerPage)
        responseDict["TotalProducts"] = phoneCollection.find().count()

    elif "BrandsFilter" in filters:
        brands = requestDict["BrandsFilter"]
        ############################ Only BrandsFilter is applied###############################
        if "PriceAscending" not in filters and "PriceDescending" not in filters:
            #print("out")
            query = {"Brand_name": {"$in": brands}}
            productsCursor = phoneCollection.find(query).skip(skipValue).limit(productPerPage)
            responseDict["TotalProducts"] = phoneCollection.find(query).count()
        ############################ BrandsFilter with PriceAscending or PriceDescending################################
        elif "PriceAscending" in filters or "PriceDescending" in filters:
            #print("in")
            # 1 means Ascending order and -1 means descending order for $sort key

            query = [{'$match': {"Brand_name": {"$in": brands}}},
                     {'$sort': {'Product_price': 1 if "PriceAscending" in filters else -1}},     #wil give 1 if "PriceAscending" exist else -1
                     {'$skip': skipValue},
                     {'$limit': productPerPage}
                     ]
            #print(query)
            queryTotalProducts = [{'$match': {"Brand_name": {"$in": brands}}},
                     {'$sort': {'Product_price': 1 if "PriceAscending" in filters else -1  }},     #wil give 1 if "PriceAscending" exist else -1
                     {'$group': {'_id': None,'count': {'$sum': 1 } }}
                     ]
            productsCursor = phoneCollection.aggregate(query)
            responseDict["TotalProducts"] = phoneCollection.aggregate(queryTotalProducts).next()["count"]   #.next() because it is a cursor and it gives one single dictionary attribute that containes _id and count keys.

    ############################ AscendingPrice or DescendingPrice################################
    elif "PriceAscending" in filters or "PriceDescending" in filters:
        productsCursor = phoneCollection.find().sort("Product_price", 1 if "PriceAscending" in filters else -1).skip(skipValue).limit(productPerPage)      #wil give 1 if "PriceAscending" exist else -1
        responseDict["TotalProducts"] = phoneCollection.find().count()


    #add products into responseDict
    for product in productsCursor:
        responseDict["Products"].append(product)
    return responseDict     # requestDict is of dictionary type contains all the details about the dictionary.


"""
#################################delete after development completed####################################
with open('export.json',  'w') as outfile:
    #write json data into dataset.json file(it creates new json file)
    json.dump(responseDict,outfile,indent=1)
#################################delete after development completed####################################


print("The database exists.")

"""
