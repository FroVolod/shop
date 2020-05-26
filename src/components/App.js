import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ProductList } from 'components/ProductList';
import { ProductDetail } from 'components/ProductDetail';
import { ShoppingCart } from 'components/ShoppingCart';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/details">
          <ProductDetail />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
