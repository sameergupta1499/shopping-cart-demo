from pymongo import MongoClient
from createInitialDBFromJson import getDataJson,createDB
from mongoDBURI import mongoDBURI
from bson.json_util import dumps

#connection to the mongodb.com cluster
client = MongoClient(mongoDBURI)             #add your db string
dblist = client.list_database_names()        #Get list of DB in the mongoDB

#create DB if DB doesn't exist
if "shopping-cart-db" not in dblist:
    createDB(client)                      # createDB() is a function in createInitialDBFromJson.py file



#if the DB exists
else:
    #No product filter
    print("The database exists.")