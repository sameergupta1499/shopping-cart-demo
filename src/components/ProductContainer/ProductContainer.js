import React from "react";
import {connect} from 'react-redux';
import {fetchProducts} from '../../services/product-container/action'
import ProductItemContainer from './ProductItemContainer/ProductItemContainer'
import ProductContainerHeader from "./ProductContainerHeader/ProductContainerHeader";

class ProductContainer extends React.Component {
    constructor(props){
        super(props)
        this.onUpdateProducts=this.onUpdateProducts.bind(this)
    }
    componentDidMount() {
        let RequestType = "GetProducts"
        this.props.onUpdateProducts(this.props.filterBrands.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
    }
    onUpdateProducts(){
        let RequestType = "GetProducts"
        this.props.onUpdateProducts(this.props.filterBrands.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
    }
    componentDidUpdate(prevProps){
        //Checking if these props changed their state , to rerender the component and fetch new data.
        if(prevProps.filterBrands!==this.props.filterBrands || prevProps.sort!==this.props.sort || prevProps.pageDetails!==this.props.pageDetails ){
            let RequestType = "GetProducts"
            this.props.onUpdateProducts(this.props.filterBrands.BrandsFilter,this.props.pageDetails,this.props.sort.Sort,RequestType)
        }
        //this.props.onUpdateProducts(this.props.filterBrands,this.props.pageDetails,this.props.sort)
    }
    render(){
        //console.log("inside product container component")
        return (
            <>
                <div className="product-container">
                    <ProductContainerHeader totalProducts={this.props.products.TotalProducts}/>
                    <ProductItemContainer products={this.props.products.Products}/>
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
        filterBrands:state.filterBrands,
        pageDetails:state.pageDetails,
        sort:state.sort
    }
}
const mapActionsToProps={
    onUpdateProducts:fetchProducts
}
export default connect(mapStateToProps,mapActionsToProps) (ProductContainer);