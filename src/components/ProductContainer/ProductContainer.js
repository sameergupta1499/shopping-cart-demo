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
        this.props.onUpdateProducts()
    }
    onUpdateProducts(){
        this.props.onUpdateProducts()
    }
    render(){
        console.log(this.props.products.Products)
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
        products:state.products
    }
}
const mapActionsToProps={
    onUpdateProducts:fetchProducts
}
export default connect(mapStateToProps,mapActionsToProps) (ProductContainer);