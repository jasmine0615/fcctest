import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://testing-7noe.onrender.com/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
          <h3>Create Account</h3>
        </div>
        <div className="holder">
          <div className="social-accounts"></div>
          <div class="login-container">
            <form onSubmit={handleSubmit}>
              <div class="input-container">
                <div>
                  {" "}
                  <label for="username">
                    <h4 className="labelss">First Name</h4>
                  </label>
                </div>
                <input
                  className="inputforms"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={data.firstName}
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-container">
                <div>
                  <label for="password">
                    <h4 className="labelss">Last Name</h4>
                  </label>
                </div>
                <input
                  className="inputforms"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                  value={data.lastName}
                  onChange={handleChange}
                />
              </div>
              <div class="input-container">
                <div>
                  <label for="password">
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
              {error && <div>{error}</div>}
              <div class="button-container">
                <button
                  type="submit"
                  className="primary-btn"
                  onChange={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
