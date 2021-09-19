import React from "react";
import "./footers.css";
import { Link } from "react-router-dom";
export default function Footers() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="footer__widget">
              <h6>Hệ Thống Cửa Hàng</h6>
              <p>1 Vo Van Ngan Street Thu Duc District Ho Chi Minh City</p>
              <p>8 Số 5, Tăng Nhơn Phú B, Quân 9, Thành phô Hồ Chí Minh</p>
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div class="footer__widget">
              <h6>Chính Sách</h6>
              <ul>
                {/* <li><a href="./csbm.html">Chính Sách Bảo Mật</a></li> */}
              </ul>
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
            <div class="footer__widget">
              <h6>Follow us on Instagram</h6>
              <ul>
                {/* <li><a href="https://www.instagram.com/delwyn.st/"  target="_blank"><img src="img/ins.jpg" alt="">
                                </a></li> */}
              </ul>
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
            <div class="footer__widget">
              <h6>Follow us on Facebook</h6>
              <ul>
                <li>
                  <Link
                    to="https://www.facebook.com/delwynstreetwear.vn"
                    target="_blank"
                  >
                    {/* <img src="img/fb.jpg" alt=""> */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="footer__copyright__text">
              <p>
                Copyright © Đồ án Tiểu Luận Chuyên Ngành by CHUANG team
                <i class=" fa fa-heart" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
