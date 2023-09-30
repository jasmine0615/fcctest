import React from "react";
import "./Mainpage.css";
import fcc from "../assets/fcc.png";
import companies from "../assets/companies.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search 8000+ tutorials" />
        </div>

        <div>
          <Link to="/">
            <img src={fcc} className="fccimg" alt="FCC Image" />
          </Link>
        </div>
        <div className="btns">
          <button className="btn-menu">Menu</button>
          <Link to="/login">
            <button className="btn-menu btn3">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="content-box">
        <h1 className="h1box">Learn to code - for free.</h1>
        <h1 className="h1box">Build projects</h1>
        <h1 className="h1box">Earn Certifications.</h1>
        <h4>
          <p className="ptext">
            Since 2014,more than 40,000 freecodecamp.org graduates have gotten
          </p>
        </h4>
        <h4>
          <p className="ptext">jobs at tech companies including:</p>
        </h4>
        <img src={companies} width={800} />
        <Link to="/login">
          <button className="btn-cta">Get started(it's free)</button>
        </Link>
      </div>
    </>
  );
};

export default Mainpage;
