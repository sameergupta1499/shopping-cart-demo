import {FETCH_PRODUCTS} from "./actionTypes";
const productsReducer = (state={}, action)=>{
    //console.log("inside productReducer")
    //console.log(state)
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {                          //creating copy of state object before copying to ignore modifying original state
                ...state,
                Products: action.payload.Products,
                TotalProducts: action.payload.TotalProducts
      };
        default :
            return state
    }
}

export default productsReducer;
