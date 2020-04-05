import {UPDATE_PAGE_STATE} from "./actionTypes";
const pageStateReducer = (state={}, action)=>{
    switch(UPDATE_PAGE_STATE) {
        case UPDATE_PAGE_STATE:
            return action.payload
        default :
            return state
    }
}

export default pageStateReducer;
