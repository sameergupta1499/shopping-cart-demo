import {FETCH_PRODUCTS} from "./actionTypes";
import axios from 'axios';
import createProductAPI from '../util/createProductAPI'
import {showSpinner,hideSpinner} from '../Spinner/action'
import {CLIENT_DOMAIN_URL} from "../util/domainNameURL";

export const fetchProducts = (BrandsFilter,pageDetails,sort,RequestType) => dispatch => {
    let APIURL= createProductAPI(BrandsFilter,pageDetails,sort,RequestType)      //to construct APIURL that with the current state of the site
    const params = APIURL.searchParams;
    //console.log(myUrlWithParams.toString())
    //console.log(`?${params.toString()}`)
    window.history.replaceState("", "", CLIENT_DOMAIN_URL+ `?${params.toString()}`);
    //console.log(pageDetails.CurrentPage)
    //console.log(window.location.hash)
    dispatch(showSpinner())       //changing state of loadingState state to true , this will display the spinner on the screen
    //console.log("show spinner")
  return axios
    .get(APIURL)
    .then(response => {
        dispatch(hideSpinner())       //changing state of loadingState state to false , this will remove the displayed spinner
      return dispatch({                        //this dispatch will run after the earlier dispatch gives the request back. This is because of THUNK working as middlewear.
        type: FETCH_PRODUCTS,
        payload: response.data
      });
    })
    .catch(err => {
        dispatch(hideSpinner())       //changing state of loadingState state to false , this will remove the displayed spinner
      console.log('Could not fetch products. Try again later.');
    });
};
