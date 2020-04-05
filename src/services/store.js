import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer'

const initialState = {
        "products":{
            "Products":[],
            "TotalProducts":0
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




/*
const store = createStore(allReducers,
    {
        "RequestType": "GetProducts",
        "Filters": [],
        "BrandsFilter": [],
        "CurrentPage": 1,
        "ProductPerPage": 25,
        "brands":{},
        "products":{}
    },
    window.devToolsExtension && window.devToolsExtension())
*/