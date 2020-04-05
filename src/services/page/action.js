import {UPDATE_PAGE_STATE} from "./actionTypes";
import axios from 'axios';

export const updatePageState = ()=>{
    return {
        type:UPDATE_PAGE_STATE,
        payload:{"sam":"inside product-container"}
    }
};

