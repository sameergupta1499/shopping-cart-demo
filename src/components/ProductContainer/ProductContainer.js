import React from "react"
import ProductContainerHeader from "./ProductContainerHeader/ProductContainerHeader";
import ProductItemContainer from "./ProductItemContainer/ProductItemContainer";

function ProductContainer(props) {
    return (
        <div className="product-container">
            <ProductContainerHeader/>
            <ProductItemContainer/>
        </div>
    )
}

export default ProductContainer