import json
#outputs list of objects i.e.[{},{},{}]
def getDataJson():
    with open('dataset.json', encoding="utf8") as infile:
        # parsing json data into list of dictionaries
        data = json.load(infile)  # total documents 9570
        return data

def createDB(client):
    shoppingDB = client["shopping-cart-db"]
    phoneCollection = shoppingDB["phones"]
    phoneListData = getDataJson()
    x = phoneCollection.insert_many(phoneListData)
    print(x.inserted_ids)
    print(client.list_database_names())