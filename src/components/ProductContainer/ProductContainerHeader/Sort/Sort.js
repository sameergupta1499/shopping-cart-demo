import React from "react";
import {sortProduct} from "../../../../services/sort/action"
import {connect} from "react-redux";

function getClass(sortType,sort){
    if(sort===sortType){
        return "active"
    }
    return ""
}

class Sort extends React.Component{
    constructor(props){
        super(props)
        this.onUpdateSort=this.onUpdateSort.bind(this)
    }
    onUpdateSort(type){
        this.props.onUpdateSort(type)
    }
    render() {
        //const URLByUser = new URL(window.location.href);
        //         console.log(URLByUser.toString())
        return (
            <div className="sort-container">
                <span>Sort By</span>
                <nav className="nav" id="sort-list">
                    <li className={getClass("", this.props.sort)} onClick={()=>this.props.onUpdateSort("")}>Popularity</li>
                    <li className={getClass("PriceAscending", this.props.sort)}  onClick={()=>this.props.onUpdateSort("PriceAscending")}>Price -- Low to High</li>
                    <li className={getClass("PriceDescending", this.props.sort)} onClick={()=>this.props.onUpdateSort("PriceDescending")}>Price -- High to Low</li>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state,props)=>{
    return {
        sort:props.sort
    }
}

const mapActionsToProps={
    onUpdateSort:sortProduct
}
export default connect(mapStateToProps,mapActionsToProps) (Sort);