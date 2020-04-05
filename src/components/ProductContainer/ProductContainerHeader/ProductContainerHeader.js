import React from "react";

function ProductContainerHeader(props){
    console.log(props.totalProducts)
    return (
        <>
            <div className="product-container-header">
                <p>Total Products are {props.totalProducts}</p>
            </div>
       </>
    )
}
export default ProductContainerHeader