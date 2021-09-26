import React from "react";
import "./about.css";
import Pic1 from "./images/1.jpg";
import Pic2 from "./images/2.jpg";
import Pic3 from "./images/4.jpg";
import { Link } from "react-router-dom";
import { Person, SupervisedUserCircle } from "@material-ui/icons";

export default function About() {
  return (
    <div>
      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About us</h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/1.HEIC"
                >
                  <img src={Pic2} alt="" width="auto" height="350px" />
                </div>
                <div className="blog__item__text">
                  <span>
                    <Person /> Sinh viên thực hiện
                  </span>
                  <h5>Lưu Đình Chuẩn</h5>
                  <Link
                    to="https://my-18110158-personal.herokuapp.com/"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic set-bg">
                  <img src={Pic1} alt="" width="auto" height="350px" />
                </div>
                <div className="blog__item__text">
                  <span>
                    <Person /> Sinh viên thực hiện
                  </span>
                  <h5>Phan Thị Thu Trang</h5>
                  <Link
                    to="https://proj-personal.herokuapp.com/"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="blog__item">
                <div
                  className="blog__item__pic set-bg"
                  data-setbg="img/blog/3.jpg"
                >
                  <img src={Pic3} alt="" width="100%" height="350px" />
                </div>
                <div className="blog__item__text">
                  <span>
                    <SupervisedUserCircle /> Giáo viên hướng dẫn
                  </span>
                  <h5>Huỳnh Xuân Phụng</h5>
                  <Link
                    to="http://simikula-18110242.herokuapp.com/"
                    target="_blank"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <h2>Description</h2>
                </div>
                <ul>
                  <li>
                    <h4>
                      Đồ Án Tiểu Luận Chuyên Ngành - Khoa Đào Tạo Chất Lượng Cao
                      - Khoá K18 (2021/2022)
                    </h4>
                    <h6>Đề tài</h6>
                    <p>Bookstore website with MERN stack</p>
                    <h6>Tính năng</h6>
                    <p>
                      Tài khoản và phân quyền quản lí theo admin , customers
                      Danh mục, Giỏ hàng, đơn hàng, , thanh toán ,hoá đơn, nhật
                      kí Thanh toán trực tuyến, email
                    </p>
                    <h6>Thành viên</h6>
                    <p>Phan Thị Thu Trang - 18110217</p>
                    <p>Lưu Đình Chuẩn - 18110085</p>
                    <h6>Giáo viên hướng dẫn</h6>
                    <p>Thầy TS.Huỳnh Xuân Phụng</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {/* <div className="contact__form">
                <form action="mailto:delwynshop2807@gmail.com">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Message"></textarea>
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4834820480405!2d106.7696897143373!3d10.850783860785006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bb99e5e311%3A0x2b9708abbd951e69!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1607073274577!5m2!1svi!2s"
                width="600"
                height="400"
                frameBorder="0"
                aria-hidden="false"
                tabIndex="0"
                alt=""
                title="ss"
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4834820480405!2d106.7696897143373!3d10.850783860785006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bb99e5e311%3A0x2b9708abbd951e69!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1607073274577!5m2!1svi!2s"
            width="600"
            height="400"
            frameborder="0"
            aria-hidden="false"
            tabindex="0"
            alt=""
            title="ss"
          ></iframe>
        </div> */}
      </section>
    </div>
  );
}
