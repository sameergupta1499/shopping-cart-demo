import productsData from "../dummyAPICallData/productsData";
const productsReducer = (state={}, action)=>{
    if(action.type=='UPDATE_PRODUCTS_ACTION'){
        return productsData
    }
    else{
        return {}
    }
}
export default productsReducer;