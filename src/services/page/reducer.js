import {UPDATE_PAGE_STATE} from "./actionTypes";
const pageStateReducer = (state={}, action)=>{
    switch(action.type) {
        case UPDATE_PAGE_STATE:
            return {
                ...state,
                CurrentPage : action.payload
            }
        default :
            return state
    }
}

export default pageStateReducer;
