import React from "react"
import ProductItem from "./ProductItem/ProductItem"



function ProductItemContainer(props){
        const  productItem= props.products.map(item => <ProductItem key={item._id} item={item} />);
        //console.log(productItem)
        return (
            <div className="product-item-container row">
                {productItem===[]?console.log("Data Fetching"):productItem}
            </div>
        )
}


export default ProductItemContainer