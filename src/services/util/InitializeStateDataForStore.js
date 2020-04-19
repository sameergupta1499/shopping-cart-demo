function getBrandsName(params){
    if(params.get("Filters")!==null){
        if(params.get("Filters").includes("BrandsFilter")===true){                      //Sample URL Below
            return JSON.parse(params.get("BrandsFilter"))                              //http://localhost:3000/?RequestType=GetProducts&Filters=%5B%22BrandsFilter%22%2C%22PriceAscending%22%5D&BrandsFilter=%5B%22Beetel%22%2C%22Binatone%22%5D&CurrentPage=1&ProductPerPage=24
        }
    }
    return []
}

function getSortName(params){
    if(params.get("Filters")!==null){
        if(params.get("Filters").includes("PriceAscending")===true){
            return "PriceAscending"
        }
        if(params.get("Filters").includes("PriceDescending")===true){
            return "PriceAscending"
        }

    }
    return ""
}


export default function initialState(){
    const URLByUser = new URL(window.location.href);     //input url by the user
    console.log(URLByUser)
    const params = URLByUser.searchParams;
    //console.log(params.get("CurrentPage")===null?"null hai ":"data hai be")       //to get value of particular paramater
    let initialURLParams = `?${params.toString()}`
    //console.log(`?${params.toString()}`)
    return({
    "products": {
        "Brands": getBrandsName(params),
        "Products": [],
        "TotalProducts": 0
    },
    "filters": {
        "BrandsFilter": getBrandsName(params)
    },
    "pageDetails": {
        "CurrentPage": params.get("CurrentPage")===null?1:parseInt(params.get("CurrentPage")),
        "ProductPerPage": params.get("ProductPerPage")===null?24:parseInt(params.get("ProductPerPage"))
    },
    "sort": {
        "Sort": getSortName(params)    //PriceAscending and PriceDescending are the possible value
    },
    "loadingState": {
        "LoadingState": false
    }
})}