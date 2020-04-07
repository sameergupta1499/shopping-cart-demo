import React from "react";
import {connect} from 'react-redux';
import {addBrandFilter} from '../../../services/filter/action'

class FilterItem extends React.Component {
    constructor(props){
        super(props)
        this.onUpdateBrandList=this.onUpdateBrandList.bind(this)
    }
    onUpdateBrandList(item){
        this.props.onUpdateBrandList(item)
    }
    render(){
        return (
            <>
                <div className="filter-item" onClick={()=>this.onUpdateBrandList(this.props.item)}>
                    {this.props.item}
                </div>
           </>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        filterBrands:state.filterBrands,
        item:props.item
    }
}
const mapActionsToProps={
    onUpdateBrandList:addBrandFilter
}
export default connect(mapStateToProps,mapActionsToProps) (FilterItem);