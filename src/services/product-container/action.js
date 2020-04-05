import {FETCH_PRODUCTS} from "./actionTypes";
import axios from 'axios';

export const fetchProducts = () => dispatch => {
  return axios
    .get('http://127.0.0.1:5000/Products/Phone?Filters=["BrandsFilter","PriceAscending"]&BrandsFilter=["Samsung","Mi"]&CurrentPage=2&ProductPerPage=25')
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
