import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer'

const initialState = {
        "products":{
            "Products":[],
            "TotalProducts":0
        },
        "brands":{
            "Brands":[],
            "TotalProducts":0
        },
        "filterBrands":{
            "BrandsFilter":[]
        },
        "pageDetails":{
        "CurrentPage":1,
        "ProductPerPage":25
        },
        "sort":{
        "Sort":""    //PriceAscending and PriceDescending are the possible value
        }
    }

const allStoreEnhancer =  compose(
      applyMiddleware(thunk),
      window.devToolsExtension && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
const store = createStore(allReducers,
    initialState,
    allStoreEnhancer)

export default store;

