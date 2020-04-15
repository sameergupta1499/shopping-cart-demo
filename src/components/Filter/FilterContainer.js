import React from "react";
import {connect} from 'react-redux';
import FilterItem from "./FilterItem/FilterItem";
import SearchInput, {createFilter} from 'react-search-input'
import ReactDOM from 'react-dom'

class FilterContainer extends React.Component {
    constructor(props){
        super(props)
        this.searchBrands=this.searchBrands.bind(this)
        this.state= {
            searchInputValue: ''
        };


    }
    searchBrands(event){
        //const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        this.setState({searchInputValue: event.target.value});
        console.log(event.target.value)
    }
        //console.log(this.state.copyBrands)

    render(){
        const  brandsSixItem = this.props.brands.map((item,index) => <FilterItem key={index} item={item}/>);
        //console.log(ReactDOM.findDOMNode(this))
        return (
            <>
                <div className=" filter-container-wrapper col-sm-3">
                    <div className="filter-header">Filters</div>
                      <div className="brand-container">
                    <div className="brand-header">Brand</div>
                          <input className="form-control" id="myInput" type="text" value={this.state.searchInputValue} onChange={(event) => this.searchBrands(event)} placeholder="🔍 Search Brand.."/>

                        <ul className="Brand-List">
                        {brandsSixItem===[]?console.log("Data Fetching"):brandsSixItem}
                        </ul>
                    </div>
                     <div className="filter-container-footer"></div>
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