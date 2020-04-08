import {FETCH_BRANDS,ADD_BRAND_FILTER,DELETE_BRAND_FILTER} from "./actionTypes";
import {DOMAIN_NAME_URL} from '../util/domainNameURL'
import axios from 'axios';

export const fetchBrands = () => dispatch => {
    let APIURL=DOMAIN_NAME_URL+"?RequestType=GetBrandsName"
  return axios
    .get(APIURL)
    .then(response => {
      return dispatch({                        //this dispatch will run after the earlier dispatch gives the request back. This is because of THUNK working as middlewear.
        type: FETCH_BRANDS,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Could not fetch Brands. Try again later.');
    });
};
export const addBrandFilter = brandToAdd => ({               //brand name should be string type
  type: ADD_BRAND_FILTER,
  payload: brandToAdd
});

export const deleteBrandFilter = brandToDelete =>({
     type: DELETE_BRAND_FILTER,
     payload: brandToDelete
});
