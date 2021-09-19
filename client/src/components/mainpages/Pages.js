import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductFeatures from "../../features/Product/products";
import Banner from "../banners/Banner";
import Login from "./auth/Login";
import Register from "./auth/Register";

import Cart from "./cart/Cart";
import NotFound from "./utils/NotFound/NotFound";

function Pages() {
  return (
    <div>
      <Switch>
        <Route path="/home" exact component={Banner} />
      </Switch>
      <Switch>
        <Route path="/products" component={ProductFeatures} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </div>
  );
}

export default Pages;
