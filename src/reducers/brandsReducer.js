import brandsData from "../dummyAPICallData/brandsData";
const brandsReducer = (state={}, action)=>{
    if(action.type=='UPDATE_BRANDS_ACTION'){
        return brandsData
    }
    else{
        return {}
    }
}
export default brandsReducer;