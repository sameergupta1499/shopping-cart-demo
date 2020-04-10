import {combineReducers} from 'redux';
import {addBrandFilterReducer} from './filter/reducer';
import productsReducer from "./product-container/reducer";
import pageStateReducer from "./page/reducer"
import {sortReducer} from "./sort/reducer";
import loadingStateReducer from "./Spinner/reducer"

export default combineReducers({
    products : productsReducer,
    filterBrands: addBrandFilterReducer,
    pageDetails: pageStateReducer,
    sort:sortReducer,
    loadingState: loadingStateReducer
})
