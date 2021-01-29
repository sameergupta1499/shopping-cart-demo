import React from "react";
import TotalProducts from "./TotalProducts/TotalProducts";
import Sort from "./Sort/Sort";

function ProductContainerHeader(props){
    //console.log(props.totalProducts)
    return (
        <>
            <div className="product-container-header">
                <TotalProducts pageDetails={props.pageDetails} totalProducts={props.totalProducts}/>
                <Sort sort={props.sort}/>
            </div>
       </>
    )
}
export default ProductContainerHeader