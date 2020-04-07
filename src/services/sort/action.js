import {SORT_PRODUCTS} from "./actionTypes";


export const addBrandFilter = sortType => ({               //sort should be string type
  type: SORT_PRODUCTS,
  payload: sortType
});