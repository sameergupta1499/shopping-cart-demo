requestDictConst = {
        "RequestType": "GetProducts",  # possible values are GetProductData and GetBrandsName
        "Filters": [],
        # Possible Values PriceAscending,PriceDescending,BrandsFilter .    # All string type, it just indicates what filter have been applied.
        "BrandsFilter": [],  # will only be present in the request if BrandsFilterExists.
        "CurrentPage": 1,
        "ProductPerPage": 25
    }