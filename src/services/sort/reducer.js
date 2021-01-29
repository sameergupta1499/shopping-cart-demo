import {SORT_PRODUCTS} from "./actionTypes";
export const sortReducer = (state={}, action)=>{
    switch(action.type) {
        case SORT_PRODUCTS:
            //console.log("shooooot")
            return {                          //creating copy of state object before copying to ignore modifying original state
                ...state,
                Sort:action.payload
      };
        default :
            return state
    }
};
