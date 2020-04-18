import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer'
import initialState from './util/InitializeStateDataForStore.js'


const allStoreEnhancer =  compose(
      applyMiddleware(thunk),
      window.devToolsExtension && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
const store = createStore(allReducers,
    initialState(),
    allStoreEnhancer)

export default store;

