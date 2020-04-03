import React from "react"
import ProductContainerHeader from "./ProductContainerHeader/ProductContainerHeader";
import ProductItemContainer from "./ProductItemContainer/ProductItemContainer";

class ProductContainer extends React.Component{
     constructor() {
        super()
        this.state = {
            products: [],
            totalProducts: 0
        }
        this.getData = this.getData.bind(this);
        this.productItemContainer = this.productItemContainer.bind(this);
    }
    getData(requestAPI){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      this.setState(() => {
            return {
                products:(JSON.parse(xhr.responseText))["Products"] ,       //xhr.responseText is of string type.
                totalProducts: (JSON.parse(xhr.responseText))["TotalProducts"]
            }
        })

        var x= JSON.parse(xhr.responseText)
      console.log(x["Products"])      //xhr.responseText parsed into json type now.
      //Note: backend sending the response in Content-Type:application/json.
    })
    // open the request with the verb and the url
    xhr.open('GET', requestAPI)
    // send the request
    xhr.send()
  }

    componentDidMount() {
        this.getData("http://127.0.0.1:5000/")
    }
    productItemContainer() {

        if (this.state.products.length==0){
            console.log("outside else inside if")
        }
        else{
            console.log("inside ProductItemContainer Else",this.state.products)
            return <ProductItemContainer products={this.state.products}/>
        }
}
    render(){
        //<ProductContainerHeader />
        console.log(this.state.products)
        return (
            <div className="product-item-container">
                <button onClick={()=>{this.getData('http://127.0.0.1:5000/Products/Phone?Filters=["BrandsFilter","PriceAscending"]&BrandsFilter=["Samsung","Mi"]')}}>click me</button>
                {this.productItemContainer()}
            </div>
            )
    }
}

export default ProductContainer