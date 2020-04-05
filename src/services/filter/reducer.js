import {FETCH_BRANDS} from "./actionTypes";
const brandsReducer = (state={}, action)=>{
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
}

export default brandsReducer;

/*
export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;

      if (!!filters && filters.length > 0) {
        products = products.filter(p =>
          filters.find(f => p.availableSizes.find(size => size === f))
        );
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
*/
