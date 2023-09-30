import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signin.css";
function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://testing-7noe.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
    } catch (e) {
      if (e.response && e.response.status >= 400 && e.response.status <= 500) {
        setError(e.response.data.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-box">
        <div className="sign-in-text">
          <h2>Sign In</h2>
        </div>
        <div className="holder">
          <div className="social-accounts">
            <div className="icon1">
              <GoogleOAuthProvider clientId="431866389084-cnukookc8b9mldjpteaig7fva1aieiis.apps.googleusercontent.com">
                <GoogleLogin
                  id="custom-google-login"
                  onSuccess={(credentialResponse) => {
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                    navigate("/landingpage");
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
          <div class="login-container">
            <form onSubmit={handleSubmit}>
              <div class="input-container">
                <div>
                  {" "}
                  <label for="username">
                    <h4 className="labelss">Email address</h4>
                  </label>
                </div>
                <input
                  className="inputforms"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div class="input-container">
                <div>
                  <label for="password">
                    <h4 className="labelss">Password</h4>
                  </label>
                </div>
                <input
                  className="inputforms"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <a href="forgot-password.html" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>
              <div class="button-container">
                <Link to="/landingpage">
                  <button
                    type="submit"
                    className="primary-btn"
                    onChange={handleSubmit}
                  >
                    Sign In
                  </button>
                </Link>

                {error && <p className="error-message">{error}</p>}
              </div>
              <div>
                <h6 className="register">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <a class="registerhere">Register Here</a>
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
