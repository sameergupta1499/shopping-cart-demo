import React from "react";
import {connect} from 'react-redux';
import {addBrandFilter,deleteBrandFilter} from '../../../services/filter/action'

class FilterItem extends React.Component {
    constructor(props){
        super(props)
        this.onAddBrandToList=this.onAddBrandToList.bind(this)
        this.onDeleteBrandTolist=this.onDeleteBrandTolist.bind(this)
        this.onUpdateBrandList=this.onUpdateBrandList.bind(this)
        this.isBrandAdded=this.isBrandAdded.bind(this)
    }
    isBrandAdded(item){
        //console.log(this.props.filters.BrandsFilter,item)
        if(this.props.filters.BrandsFilter.includes(item)){
            //console.log("inside true")
            return true
        }
        else{
            return false
        }
    }
    onDeleteBrandTolist(item) {
        this.props.onDeleteBrandTolist(item)
    }
    onAddBrandToList(item){
        this.props.onAddBrandToList(item)
        //console.log(ReactDOM.findDOMNode(this))
    }
    onUpdateBrandList(item){
        //console.log(item)
        if(this.props.filters.BrandsFilter.includes(item)){
            this.onDeleteBrandTolist(item)
        }
        else{
            this.onAddBrandToList(item)
        }
    }
    render(){
        //console.log("inside filter item",this.props.item)

        return (
                <li className="brand-list-group-item" style={{listStyleType : "none"}} onClick={()=>this.onUpdateBrandList(this.props.item)}>
                    <span className={this.isBrandAdded(this.props.item)===true?"tick-brand-checkbox":"un-tick-brand-checkbox"}>
                        <span display={this.isBrandAdded(this.props.item)===true?"block":"none"}></span>
                    </span>
                    <div className="brand-list-text">{this.props.item}</div>
                </li>
        )
    }
}
//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        filters:props.filters,
        item:props.item
    }
}
const mapActionsToProps={
    onAddBrandToList:addBrandFilter,
    onDeleteBrandTolist:deleteBrandFilter
}
export default connect(mapStateToProps,mapActionsToProps) (FilterItem);