import React from "react"
import UserRating from "./UserRating/UserRating";

function ProductItem(props) {
    //console.log("inside products item")
    let MRP=Math.floor(Math.random() * 10000)
    let userRatingList=[{rating:props.item.rating},{rating:props.item.rating},{rating:props.item.rating},{rating:props.item.rating},{rating:props.item.rating}]
    const  userRating= userRatingList.map((rating,index) => <UserRating key={index} currentIndex={index} rating={props.item.rating} />);  //Considering every single star as a single component. so total component are 5.
    return (
        <>
            <div className="product-item col-sm-3">
                <div className="product-image-container">
                <img className="product-img " src={props.item.Product_img} alt={props.item.Product_name}/>
                </div>
                <div className="product-item-description">
                <div className="product-name-container">
                <p className="product-name">{props.item.Product_name}</p>
                </div>
                <div className="product-rating-container">{userRating} {props.item.total_review.replace(" customer reviews","")}</div>
                <div className="product-price-container">
                    <span className={"product-price-discounted"}>₹ {props.item.Product_price}  </span>
                    <span className={"product-price-mrp"}>₹ {MRP+props.item.Product_price}</span>
                </div><br />
                </div>
            </div>
       </>
    )
}

export default ProductItem