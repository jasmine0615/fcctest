import React from "react";
import fcc from "../assets/fcc.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/">
            <img src={fcc} className="img-fcc" alt="FCC Image" />
          </Link>
        </div>
        <div className="btns">
          <button className="btn-menu1">Menu</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
