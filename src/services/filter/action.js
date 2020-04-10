import {ADD_BRAND_FILTER,DELETE_BRAND_FILTER} from "./actionTypes";


export const addBrandFilter = brandToAdd => ({               //brand name should be string type
  type: ADD_BRAND_FILTER,
  payload: brandToAdd
});

export const deleteBrandFilter = brandToDelete =>({
     type: DELETE_BRAND_FILTER,
     payload: brandToDelete
});
