import {combineReducers} from 'redux';
import productsReducer from "./productsReducer";
import brandsReducer from "./brandsReducer";

const allReducers = combineReducers({
    products : productsReducer,
    brands : brandsReducer
})
export default allReducers;