import {UPDATE_PAGE_STATE} from "./actionTypes";


export const updatePageState = (navigateToPage)=>{
    return {
        type:UPDATE_PAGE_STATE,
        payload:navigateToPage
    }
};

