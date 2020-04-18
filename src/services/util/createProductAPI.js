import {SERVER_DOMAIN_URL} from './domainNameURL'
import {CLIENT_DOMAIN_URL} from "./domainNameURL";

function listToStringFunc(list){
    if(list.length===0){         //checking if the list is empty
        return "[]"
    }
  let str='['
  for(let index in list){
    str += '"'+list[index].toString()+'",';
    //console.log(list[index])
  }
  str = str.slice(0, -1) + ']'         //deleting ',' from the end and adding ']'
  return str
}

function getCombineSortBrandsList(BrandsFilter,sort){
    let filters = []
    if(BrandsFilter.length!==0){
        filters.push("BrandsFilter")
        //console.log(BrandsFilter)
    }
    if(sort!==""){
        filters.push(sort)
    }
    return filters
}

export default function createProductAPI(BrandsFilter,pageDetails,sort,RequestType) {
    const myUrlWithParams = new URL(SERVER_DOMAIN_URL);
    myUrlWithParams.searchParams.append("CurrentPage", pageDetails.CurrentPage);
    myUrlWithParams.searchParams.append("BrandsFilter", listToStringFunc(BrandsFilter));
    let filters = getCombineSortBrandsList(BrandsFilter, sort)
    myUrlWithParams.searchParams.append("Filters", listToStringFunc(filters));
    myUrlWithParams.searchParams.append("RequestType", RequestType);
    myUrlWithParams.searchParams.append("ProductPerPage", pageDetails.ProductPerPage);
    const params = myUrlWithParams.searchParams;
    //console.log(myUrlWithParams.toString())
    //console.log(`?${params.toString()}`)
    window.history.replaceState("", "", CLIENT_DOMAIN_URL+ `?${params.toString()}`);
    //window.location.hash = `?${params.toString()}`;
    //console.log(params.get("Filters"))
    return myUrlWithParams
}
