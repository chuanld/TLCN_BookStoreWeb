import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import axios from "axios";
import { ShoppingCart } from "@material-ui/icons";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userApi.isLogged;
  const [isAdmin, setIsAdmin] = state.userApi.isAdmin;
  const [cart] = state.userApi.cart;

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
          <NavLink to="/infor" className="nav-link" activeClassName="active">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            onClick={logoutUser}
          >
            Logout
          </NavLink>
        </li>
      </>
    );
  };

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.clear();
    window.location.href = "/";
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
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  exact
                  activeClassName="active"
                >
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-link"
                  activeClassName="active"
                >
                  {isAdmin ? "Shop" : "Products"}
                </NavLink>
              </li>

              {isAdmin ? (
                adminRouter()
              ) : isLogged ? (
                loggedRouter()
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/auth"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Login ⫘ Register
                  </NavLink>
                </li>
              )}
              <li className="nav-item header-cart">
                <span className="count">{cart.length}</span>
                <NavLink
                  to="/cart"
                  className="nav-link"
                  activeClassName="active"
                >
                  {/* <img src={Cart} alt="" width="21"></img> */}
                  <ShoppingCart />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
