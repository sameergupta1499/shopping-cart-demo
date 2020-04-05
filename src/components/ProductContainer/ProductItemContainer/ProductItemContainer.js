import React from "react"
import ProductItem from "./ProductItem/ProductItem"



function ProductItemContainer(props){
        const  productItem= props.products.map(item => <ProductItem key={item._id} item={item} />);
        return (
            <div className="product-item-container">
                {productItem===[]?console.log("Data Fetching"):productItem}
            </div>
        )
}


export default ProductItemContainer