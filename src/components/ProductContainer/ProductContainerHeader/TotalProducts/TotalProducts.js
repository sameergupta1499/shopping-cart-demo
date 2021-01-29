import React from "react";

function getDisplayedProductsLimit(cp,ppp,tp){
    if(tp>(cp*ppp)){
        return cp*ppp
    }
    return tp
}
function TotalProducts(props){
    //console.log(props.totalProducts)
    let cp=props.pageDetails.CurrentPage
    let ppp=props.pageDetails.ProductPerPage
    let tp=props.totalProducts
    return (
            <div className="product-total-header">
                <span>Mobiles </span>
                <p>(Showing {((cp-1)*ppp)+1} - {getDisplayedProductsLimit(cp,ppp,tp)} products of {tp} products)</p>
            </div>
    )
}
export default TotalProducts