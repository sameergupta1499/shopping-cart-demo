import React from "react";
import {connect} from 'react-redux';
import {fetchBrands} from '../../services/filter/action'
import FilterItem from "./FilterItem/FilterItem";

class FilterContainer extends React.Component {
    constructor(props){
        super(props)
        this.onUpdateBrands=this.onUpdateBrands.bind(this)
    }
    componentDidMount() {
        this.props.onUpdateBrands()
    }
    onUpdateBrands(){
        this.props.onUpdateBrands()
    }
    render(){
        //console.log(this.props.brands)
        const  brandsItem= this.props.brands.Brands.map((item,index) => <FilterItem key={index} item={item} />);
        return (
            <>
                <div className="filter-container col-sm-3">
                    {brandsItem===[]?console.log("Data Fetching"):brandsItem}
                </div>
           </>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        brands:state.brands
    }
}
const mapActionsToProps={
    onUpdateBrands:fetchBrands
}
export default connect(mapStateToProps,mapActionsToProps) (FilterContainer);