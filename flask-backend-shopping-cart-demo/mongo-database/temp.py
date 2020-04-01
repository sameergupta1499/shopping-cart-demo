requestDict={
    'LTH' : False,
    "HTL" : False,
    "BrandsFilter" : [],
    "CurrentPage" : 1,
    "ProductPerPage" : 50
}



responseDict={
    "Products":[{"one":1},{"two":2},{"three":3}],
    "TotalProducts": 550
}

print(responseDict["Products"][1])