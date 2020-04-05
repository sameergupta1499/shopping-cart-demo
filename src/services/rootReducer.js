import {combineReducers} from 'redux';
import {brandsReducer} from './filter/reducer'
import productsReducer from "./product-container/reducer"

export default combineReducers({
    products : productsReducer
})
