import React from "react"
import ProductItem from "./ProductItem/ProductItem"
import productsData from "./ProductItem/ProductsData"     //change to the fetch data api request later

class ProductItemContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            products: productsData
        }
    }

    render() {
        const  productItem= this.state.products.map(item => <ProductItem key={item.id} item={item} />)

        return (
            <div className="product-container">
                {productItem}
            </div>
        )
    }
}

export default ProductItemContainer