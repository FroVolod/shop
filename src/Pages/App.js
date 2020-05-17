import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ProductList } from 'Pages/ProductList';
import { ProductDetail } from 'Pages/ProductDetail';
import { ShoppingCart } from 'Pages/ShoppingCart';


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
