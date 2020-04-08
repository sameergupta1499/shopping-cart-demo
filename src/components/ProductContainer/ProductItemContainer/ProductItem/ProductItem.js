import React from "react"

function ProductItem(props) {
    //console.log("inside products item")
    let MRP=Math.floor(Math.random() * 10000)
    return (
        <>
            <div className="product-item col-sm-3">
                <div className="product-img-container">
                <img className="product-img " src={props.item.Product_img} alt={props.item.Product_name}/>
                </div>
                <div className="product-name-container">
                <p className="product-name">{props.item.Product_name}</p>
                </div>
                <span className="product-price">
                    <span className={"product-price-mrp"}>₹ {MRP}</span>
                    <span className={"product-price-discounted"}>      ₹ {props.item.Product_price}</span>
                </span><br />
                <span className="product-rating">{props.item.rating}</span>
            </div>
       </>
    )
}

export default ProductItem