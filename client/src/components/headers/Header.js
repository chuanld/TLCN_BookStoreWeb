import React, { useContext } from "react";
import Cart from "./icon/cart3.svg";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;

  const adminRouter = () => {
    return (
      <>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            Admin Panel
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li className="nav-item">
          <Link to="/infor" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    setIsAdmin(false);
    setIsLogged(false);
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h2>
              {isAdmin ? "Admin " : "Chuang "}
              <em>{isAdmin ? "Management" : "Store"} </em>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  {isAdmin ? "Shop" : "Products"}
                </Link>
              </li>

              {isAdmin ? (
                adminRouter()
              ) : isLogged ? (
                loggedRouter()
              ) : (
                <li className="nav-item">
                  <Link to="/auth" className="nav-link">
                    Login ⫘ Register
                  </Link>
                </li>
              )}
              <li class="nav-item header-cart">
                <span className="count">10</span>
                <Link to="/cart" className="nav-link">
                  <img src={Cart} alt="" width="21"></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
