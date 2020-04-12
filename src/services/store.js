import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer'

const initialState = {
        "products":{
            "Brands":[],
            "Products":[],
            "TotalProducts":0
        },
        "filters":{
            "BrandsFilter":[]
        },
        "pageDetails":{
        "CurrentPage":1,
        "ProductPerPage": 24
        },
        "sort":{
        "Sort":""    //PriceAscending and PriceDescending are the possible value
        },
        "loadingState":{
        "LoadingState":false
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

