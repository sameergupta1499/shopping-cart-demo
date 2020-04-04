import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import DummyComponent from "../DummyComponent/DummyComponent";

const App = () => (
  <React.Fragment>
    <main>
        <DummyComponent/>
    </main>
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