import React from "react"

function ProductItem(props) {
    //console.log("inside products item")

    return (
        <>
            <div className="product-item">
                <img className="product-img" src={props.item.Product_img} alt={props.item.Product_name}/>
                <p className="product-name">{props.item.Product_name}</p>
                <span className="product-price">₹ {props.item.Product_price}</span><br />
                <span className="product-rating">{props.item.rating}</span>
            </div>
       </>
    )
}

export default ProductItem