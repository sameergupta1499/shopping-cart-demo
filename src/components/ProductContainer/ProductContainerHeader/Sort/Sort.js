import React from "react";
import {sortProduct} from "../../../../services/sort/action"
import {connect} from "react-redux";

function getClass(sortType,sort){
    if(sort===sortType){
        return "nav-link active"
    }
    return "nav-link"
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
        return (
            <div className="sort-container">
                <span>Sort By</span>
                <nav className="nav" id="sort-list">
                    <a className={getClass("", this.props.sort)} href="/#" onClick={()=>this.props.onUpdateSort("")}>Popularity</a>
                    <a className={getClass("PriceAscending", this.props.sort)} href="/#" onClick={()=>this.props.onUpdateSort("PriceAscending")}>Price -- Low to High</a>
                    <a className={getClass("PriceDescending", this.props.sort)} href="/#" onClick={()=>this.props.onUpdateSort("PriceDescending")}>Price -- High to Low</a>
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