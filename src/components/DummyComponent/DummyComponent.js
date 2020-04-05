import React from "react";
import {connect} from 'react-redux';
import {fetchProducts} from '../../services/product-container/action'

//onClick={()=>dispatch(updateBrands())

class DummyComponent extends React.Component {
    constructor(props){
        super(props)
        this.onUpdateProducts=this.onUpdateProducts.bind(this)
    }
    onUpdateProducts(){
        this.props.onUpdateProducts()
    }
    render(){
        console.log(this.props.products.Products)
        return (
            <>
                <div className="dummy-component">
                    <button onClick={this.onUpdateProducts}>Fetch Products</button>
                    <button>Fetch Brands</button>
                    <p>{this.props.products["TotalProducts"]}</p>
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
export default connect(mapStateToProps,mapActionsToProps) (DummyComponent);