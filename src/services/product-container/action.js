import {FETCH_PRODUCTS} from "./actionTypes";
import axios from 'axios';
import createProductAPI from '../util/createProductAPI'
import {showSpinner,hideSpinner} from '../Spinner/action'

export const fetchProducts = (BrandsFilter,pageDetails,sort,RequestType) => dispatch => {
    let APIURL= createProductAPI(BrandsFilter,pageDetails,sort,RequestType)      //to construct APIURL that with the current state of the site
    //console.log(pageDetails.CurrentPage)
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
