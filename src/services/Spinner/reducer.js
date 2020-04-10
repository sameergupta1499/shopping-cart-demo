import {SHOW_SPINNER,HIDE_SPINNER} from "./actionTypes";
const loadingStateReducer = (state={}, action)=>{
    switch(action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                LoadingState : action.payload
            };
        case HIDE_SPINNER:
            return {
                ...state,
                LoadingState : action.payload
            };
        default :
            return state
    }
}

export default loadingStateReducer;
