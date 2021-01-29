import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import FilterContainer from "../Filter/FilterContainer";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const App = () => (
    <React.Fragment>
        <div className="wrapper">
            <Header/>
            <main className="container-fluid">
                <div className={"row"}>
                    <FilterContainer/>
                    <ProductContainer/>
                </div>
            </main>
        </div>
        <Footer/>
    </React.Fragment>
);


/* Final Setup
import React from 'react';
import ProductContainer from '../ProductContainer';
import GithubCorner from '../GithubCorner'
import CartSideBar from '../CartSideBar'
import Filter from '../Filter'


const App = () => (
  <React.Fragment>
    <GithubCorner />

    <main>
      <Filter />
      <ProductContainer />
    </main>
    <CartSideBar />
  </React.Fragment>
);
*/

export default App;