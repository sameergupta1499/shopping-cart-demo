import {FETCH_BRANDS,ADD_BRAND_FILTER,DELETE_BRAND_FILTER} from "./actionTypes";
export const brandsReducer = (state={}, action)=>{
    switch(action.type) {
        case FETCH_BRANDS:
            return {                          //creating copy of state object before copying to ignore modifying original state
                ...state,
                Brands: action.payload.Products,
                TotalProducts: action.payload.TotalProducts
      };
        default :
            return state
    }
};

export const addBrandFilterReducer = (state={}, action)=>{
    switch(action.type) {
        case ADD_BRAND_FILTER:
                let copyState = {...state};                //creating copy of state object before copying to ignore modifying original state
                if(copyState.BrandsFilter.includes(action.payload)){                     //If same brand selected twice
                    return state
                }
                //console.log(action.payload)
                copyState.BrandsFilter.push(action.payload);

                return {
                    ...state,
                 //BrandsFilter: ["ADD ME"]
                BrandsFilter: copyState.BrandsFilter
                };


        case DELETE_BRAND_FILTER:
            let copy = {...state};
            let copyPayload = copy.BrandsFilter.filter(e => e !== action.payload);
            return {
                ...state,
                BrandsFilter: copyPayload
            };
        default :
            return state
    }
};
