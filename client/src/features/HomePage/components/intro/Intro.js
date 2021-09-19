import React from "react";
import pic1 from "./images/product_01.jpg";
import pic2 from "./images/product_02.jpg";

function Intro() {
  return (
    <div class="latest-products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Latest Products</h2>
              <a href="products.html">
                view all products <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-item">
              <a href="#">
                <img src={pic1} alt="" />
              </a>
              <div class="down-content">
                <a href="#">
                  <h4>Nhật kí màu trời</h4>
                </a>
                <h6>$25.75</h6>
                <p>Tác phẩm của Luu Dinh Chuan</p>
                <ul class="stars">
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star-half"></i>
                  </li>
                </ul>
                <span>Reviews (24)</span>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product-item">
              <a href="#">
                <img src={pic2} alt="" />
              </a>
              <div class="down-content">
                <a href="#">
                  <h4>Tittle goes here</h4>
                </a>
                <h6>$30.25</h6>
                <p>
                  Lorem ipsume dolor sit amet, adipisicing elite. Itaque,
                  corporis nulla aspernatur.
                </p>
                <ul class="stars">
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                  <li>
                    <i class="fa fa-star"></i>
                  </li>
                </ul>
                <span>Reviews (21)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
