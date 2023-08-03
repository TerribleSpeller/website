import React from "react";
import "../styles.css";
import Dipimg from "../img/DIP.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container" id="Navbar">
      <div className="row">
        <header className="d-flex flex-wrap justify-content-center pt-3">
          <img
            className="bi me-2 icon"
            width="60"
            height="60"
            src={Dipimg}
            alt="Dippy"
          />
          <div className="stacked-title mb-3 mb-md-0 me-md-auto link-body-emphasis">
            <a
              href="index.html"
              className="d-flex align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis link-color-unique text-decoration-none"
            >
              <span className="fs-4">TerribleSpeller's Personal Website</span>
            </a>
            <span className="fs-6">
              <i>Website so bad it gives actual programmers cancer</i>
            </span>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
            <NavLink to="/"><span className="nav-link">Home</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/index"><span className="nav-link">Index</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/worlds"><span className="nav-link">Worlds</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/faqs"><span className="nav-link">FAQs</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/about"><span className="nav-link">About</span></NavLink>

            </li>
          </ul>
        </header>
        <header className="d-flex flex-wrap justify-content mb-5 pb-2 border-bottom"></header>
      </div>
    </div>
  );
};

export default Navbar;
