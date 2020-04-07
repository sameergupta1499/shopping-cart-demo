import {combineReducers} from 'redux';
import {brandsReducer,addBrandFilterReducer} from './filter/reducer';
import productsReducer from "./product-container/reducer";
import pageStateReducer from "./page/reducer"
import {sortReducer} from "./sort/reducer";

export default combineReducers({
    products : productsReducer,
    brands: brandsReducer,
    filterBrands: addBrandFilterReducer,
    pageDetails: pageStateReducer,
    sort:sortReducer
})
