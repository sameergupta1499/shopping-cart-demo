import {SHOW_SPINNER,HIDE_SPINNER} from "./actionTypes";

export const showSpinner = ()=>{
    return {
        type:SHOW_SPINNER,
        payload: true
    }
};

export const hideSpinner = ()=>{
    return {
        type:HIDE_SPINNER,
        payload: false
    }
};

