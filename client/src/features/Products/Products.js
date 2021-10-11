import React from "react";
import Footers from "../../components/footers/Footers";

import BannerProduct from "./bannerProduct/BannerProduct";
import Filters from "./filters/Filters";
import ProductList from "./ProductList/ProductList";

function Products() {
  return (
    <div>
      <BannerProduct />
      <Filters />
      <ProductList />
      <Footers />
    </div>
  );
}

export default Products;
