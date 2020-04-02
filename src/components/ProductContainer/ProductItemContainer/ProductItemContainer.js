import React from "react"
//import ProductItem from "./ProductItem/ProductItem"
//import productsData from "./ProductItem/ProductsData"     //change to the fetch data api request later

class ProductItemContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [{},{}]
        }
    }

    getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      this.setState(() => {
            return {
                products:JSON.parse(xhr.responseText)         //xhr.responseText is of string type.
            }
        })
        var x= JSON.parse(xhr.responseText)
      console.log(x["Products"])      //xhr.responseText parsed into json type now.
      //Note: backend sending the response in Content-Type:application/json.
    })
    // open the request with the verb and the url
    xhr.open('GET', 'http://127.0.0.1:5000/ ')
    // send the request
    xhr.send()
  }

    componentDidMount() {
        this.getData()
    }

    render() {
        //const  productItem= this.state.products.map(item => <ProductItem key={item._id} item={item} />)

        return (
            <div className="product-container">

            </div>
        )
    }
}

export default ProductItemContainer