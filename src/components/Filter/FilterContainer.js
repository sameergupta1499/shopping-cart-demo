import React from "react";
import {connect} from 'react-redux';
import FilterItem from "./FilterItem/FilterItem";
import SearchInput, {createFilter} from 'react-search-input'
import HeaderFilters from "./AppliedFilter/AppliedFilter";
import {deleteAllFilter} from "../../services/filter/action";


class FilterContainer extends React.Component {
    constructor(props){
        super(props)
        this.searchBrands=this.searchBrands.bind(this)
        this.onDeleteAllFilter=this.onDeleteAllFilter.bind(this)
        this.onClickMore=this.onClickMore.bind(this)
        this.state= {
            searchInputValue: '',
            morePopupState:false
        };
    }
    onClickMore(){
        this.setState({...this.state,morePopupState: true});
    }
    searchBrands(term){
        //const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        this.setState({...this.state,searchInputValue: term});
        //console.log(term)
    }
    onDeleteAllFilter(){
        this.props.onDeleteAllFilter()
}
    render(){
        //console.log("inside render")
        let arr = [...this.props.brands]
        const filteredBrandsList = arr.filter(createFilter(this.state.searchInputValue))
        const  brandsSixItem = filteredBrandsList.slice(0,6).map((item,index) => <FilterItem key={index} item={item} filters={this.props.filters}/>);
        const brandsAllItem = this.props.brands.map((item,index) => <FilterItem key={index} item={item} filters={this.props.filters}/>);
        const appliedFilters= this.props.filters.BrandsFilter.map((item,index)=><HeaderFilters key={index} item={item}/>)
        //const deleteAllFilter=()=>
        //console.log(ReactDOM.findDOMNode(this)) style={{display: this.state.showStore ? 'block' : 'none' }}   {appliedFilters===[]?console.log("No Filters"):()=><div className="clear-all-filert" onClick={()=>this.onDeleteAllFilter()}>CLEAR ALL</div>}
        return (
            <>
                <div className=" filter-container-wrapper col-sm-3">
                    <div className="filter-header" >Filters
                    <div className="clear-all-filter" style={{ display: ((this.props.filters.BrandsFilter.length===0)? 'none' : 'block' )}}  onClick={()=>this.props.onDeleteAllFilter()}>CLEAR ALL</div>
                    </div>
                    {appliedFilters===[]?console.log("No Filters"):appliedFilters}
                      <div className="brand-container">
                    <div className="brand-header">Brand</div>
                          <SearchInput className="search-input" onChange={this.searchBrands}/>
                        <ul className="six-brands-list">
                        {brandsSixItem===[]?console.log("Data Fetching"):brandsSixItem}
                        </ul>
                          <span className="more-brands" onClick={()=>this.setState({...this.state,morePopupState: true})}>{this.props.brands.length - brandsSixItem.length} MORE</span>
                    </div>
                    <div className="more-brands-popup"><ul className="all-brands-list">
                        {this.state.morePopupState===false?console.log():
                            <span className="close-more-popup"  onClick={()=>this.setState({...this.state,morePopupState: false})}>Close</span>}

                        {this.state.morePopupState===false?console.log():brandsAllItem}
                    </ul>
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
        brands:state.products.Brands,
        filters: state.filters
    }
}
const mapActionsToProps={
    onDeleteAllFilter:deleteAllFilter
}
export default connect(mapStateToProps,mapActionsToProps) (FilterContainer);