from app import requestDB

requestDict = {
        "Filters":["PriceDescending","BrandsFilter"] ,     #Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": ["Samsung","Mi"],                                          #will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 5
    }

print(requestDB(requestDict))