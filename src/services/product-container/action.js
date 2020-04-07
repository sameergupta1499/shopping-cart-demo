import {FETCH_PRODUCTS} from "./actionTypes";
import axios from 'axios';
import createProductAPI from '../util/createProductAPI'

export const fetchProducts = (BrandsFilter,pageDetails,sort,RequestType) => dispatch => {
    let APIURL= createProductAPI(BrandsFilter,pageDetails,sort,RequestType)      //to construct APIURL that with the current state of the site
    //console.log(APIURL.href)
  return axios
    .get(APIURL)
    .then(response => {
      return dispatch({                        //this dispatch will run after the earlier dispatch gives the request back. This is because of THUNK working as middlewear.
        type: FETCH_PRODUCTS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
