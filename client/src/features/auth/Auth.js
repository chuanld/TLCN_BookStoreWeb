import React, { useState } from "react";
import facebook from "./images/facebook.svg";
import google from "./images/google.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirm: "",
  });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });
      localStorage.setItem("firstLogin", true);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.confirm === user.password) {
        const result = await axios.post("/user/register", { ...user });

        // localStorage.setItem("firstLogin", true);

        // window.location.href = "/";
        alert(result.data.msg);
      } else {
        alert("Confirm password is not match!");
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const [isActive, setActive] = useState(false);
  const ToogleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="login-page">
      <div
        className={`containerlg ${isActive ? "right-panel-activelg" : null}`}
        id="container"
      >
        <div className="form-containerlg sign-up-containerlg ">
          <form className="formlg" onSubmit={registerSubmit}>
            <h1>Create Account</h1>
            <div className="social-containerlg">
              <Link to="#" className="sociallg">
                <img src={facebook} alt="" width="21"></img>
              </Link>
              <Link to="#" className="sociallg">
                <img src={google} alt="" width="21"></img>
              </Link>
              <Link to="#" className="sociallg">
                <img src={facebook} alt="" width="21"></img>
              </Link>
            </div>
            {/* <span>or use your email for registration</span> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={user.email}
              onChange={onChangeInput}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={user.name}
              onChange={onChangeInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={user.password}
              onChange={onChangeInput}
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm"
              required
              value={user.confirm}
              onChange={onChangeInput}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-containerlg sign-in-containerlg ">
          <form className="formlg" onSubmit={loginSubmit}>
            <h1>Sign in</h1>
            <div className="social-containerlg">
              <Link to="#" className="sociallg">
                <img src={facebook} alt="" width="21"></img>
              </Link>
              <Link to="#" className="sociallg">
                <img src={google} alt="" width="21"></img>
              </Link>
              <Link to="#" className="sociallg">
                <img src={facebook} alt="" width="21"></img>
              </Link>
            </div>
            {/* <span>or use your account</span> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={user.email}
              onChange={onChangeInput}
            />
            <input
              type="password"
              name="password"
              required
              autoComplete="on"
              placeholder="Password"
              value={user.password}
              onChange={onChangeInput}
            />
            <Link to="/forgot">Forgot your password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-containerlg">
          <div className="overlaylg">
            <div className="overlay-panellg overlay-leftlg">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghostlg" id="signInlg" onClick={ToogleClass}>
                Sign In
              </button>
            </div>
            <div className="overlay-panellg overlay-rightlg">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghostlg" id="signUplg" onClick={ToogleClass}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
