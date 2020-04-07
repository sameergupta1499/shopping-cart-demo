import {UPDATE_PAGE_STATE} from "./actionTypes";
import axios from 'axios';

export const updatePageState = (navigateToPage)=>{
    return {
        type:UPDATE_PAGE_STATE,
        payload:navigateToPage
    }
};

