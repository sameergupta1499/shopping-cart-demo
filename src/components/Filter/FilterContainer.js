import React from "react";
import {connect} from 'react-redux';
import FilterItem from "./FilterItem/FilterItem";

class FilterContainer extends React.Component {
    render(){
        //console.log(this.props.brands)
        const  brandsItem= this.props.brands.map((item,index) => <FilterItem key={index} item={item} />);
        return (
            <>
                <div className=" filter-container-wrapper col-sm-3">
                    <div className="filter-container">
                        {brandsItem===[]?console.log("Data Fetching"):brandsItem}
                    </div>
                </div>

           </>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        brands:state.products.Brands
    }
}
export default connect(mapStateToProps) (FilterContainer);