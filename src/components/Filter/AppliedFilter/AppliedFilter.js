import React from "react";
import {connect} from 'react-redux';
import {deleteBrandFilter} from '../../../services/filter/action'

class AppliedFilter extends React.Component {
    constructor(props){
        super(props)
        this.onDeleteBrandTolist=this.onDeleteBrandTolist.bind(this)
    }
    onDeleteBrandTolist(item) {
        this.props.onDeleteBrandTolist(item)
    }


    render(){
        //console.log("inside filter item",this.props.item)
        return (
            <div className="applied-filters" onClick={()=>this.onDeleteBrandTolist(this.props.item)}><span>✕</span>{this.props.item}</div>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        AppliedFilters:props.item
    }
}
const mapActionsToProps={
    onDeleteBrandTolist:deleteBrandFilter
}
export default connect(mapStateToProps,mapActionsToProps) (AppliedFilter);