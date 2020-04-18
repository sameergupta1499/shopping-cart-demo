import React from "react";
import {connect} from 'react-redux';
import {fetchProducts} from '../../services/product-container/action'
import ProductItemContainer from './ProductItemContainer/ProductItemContainer'
import ProductContainerHeader from "./ProductContainerHeader/ProductContainerHeader";
import Spinner from "../Spinnner/Spinner"
import {updatePageState} from "../../services/page/action"
import PaginationContainer from "./PaginationContainer/PaginationContainer";
import { Redirect } from 'react-router-dom'
import createProductAPI from '../../services/util/createProductAPI'


class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.onUpdateProducts=this.onUpdateProducts.bind(this)
    }
    componentDidMount() {
        let RequestType = "WebsiteInitialization"
        this.props.onUpdateProducts(this.props.filters.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
    }
    onUpdateProducts(){
        let RequestType = "GetProducts"
        this.props.onUpdateProducts(this.props.filters.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
    }
    componentDidUpdate(prevProps){
        //Checking if these props changed their state , to rerender the component and fetch new data.
        if(prevProps.pageDetails!==this.props.pageDetails ){
            let RequestType = "GetProducts"
            let routeURL = createProductAPI(this.props.filters.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
            const params = routeURL.searchParams;
            let routeURLParams = `?${params.toString()}`
            window.location.assign(routeURLParams)
            console.log(routeURLParams)
            //this.props.onUpdateProducts(this.props.filters.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
        }
        if(prevProps.sort!==this.props.sort || prevProps.filters!==this.props.filters) { //here we just update the page number so that new filter and short will show from page 1
            this.props.onUpdatePageState(1)
        }
    }
    render(){
        //console.log("inside product container component")
        return (
            <>

                {this.props.loadingState.LoadingState && <Spinner />}
                <div className="product-container col-sm-9">
                    <ProductContainerHeader totalProducts={this.props.products.TotalProducts} sort={this.props.sort.Sort} pageDetails={this.props.pageDetails}/>
                    <ProductItemContainer products={this.props.products.Products}/>
                    <PaginationContainer />
                </div>
           </>
        )
    }
}

//To get props to the component, and to get all product just return the state else type the specific props name you want.
//props argument is the props send by the parent component, to use just create a new key and put the props as the value in it.
const mapStateToProps = (state,props)=>{
    return {
        products:state.products,
        filters:state.filters,
        pageDetails:state.pageDetails,
        sort:state.sort,
        loadingState: state.loadingState
    }
}
const mapActionsToProps={
    onUpdateProducts:fetchProducts,
    onUpdatePageState:updatePageState
}
export default connect(mapStateToProps,mapActionsToProps) (ProductContainer);