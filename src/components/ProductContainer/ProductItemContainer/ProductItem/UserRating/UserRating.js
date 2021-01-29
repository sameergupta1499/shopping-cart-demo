import React from "react"
function roundToHalf(value) {
   let converted = parseFloat(value); // Make sure we have a number
   let decimal = (converted - parseInt(converted, 10));
   decimal = Math.round(decimal * 10);
   if (decimal == 5) { return (parseInt(converted, 10)+0.5); }
   if ( (decimal < 3) || (decimal > 7) ) {
      return Math.round(converted);
   } else {
      return (parseInt(converted, 10)+0.5);
   }
}


function setRatingClass(props){
    let index=props.currentIndex
    let rating=roundToHalf(props.rating)
    //console.log(props.rating,rating)
    if(index<(parseInt(rating))){
        return "fa fa-star checked "
    }
    else{
        if(index===(parseInt(rating))){
            if(((rating*10)%10)===5){
                return "fa fa-star-half-empty halfChecked"
            }
        }
    }
    return "fa fa-star unchecked"
}

function UserRating(props){

    return (
        <div className="starContainer"><i className={setRatingClass(props)}></i> </div>
        )
}

export default UserRating