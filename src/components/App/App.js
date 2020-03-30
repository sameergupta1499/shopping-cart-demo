import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';

const App = () => (
  <React.Fragment>
    <main>
      <ProductContainer />
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