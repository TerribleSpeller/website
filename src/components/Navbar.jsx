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
              href="/"
              className="d-flex align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis link-color-unique text-decoration-none"
            >
              <span className="fs-4">TerribleSpeller's Personal Website</span>
            </a>
            <span className="fs-6">
              <i>Website so bad it gives actual programmers cancer</i>
            </span>
          </div>
          <ul className="nav ">
            <li className="nav-item pt-3">
              <NavLink to="/website/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/website/index" className="nav-link">
                Index
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/website/worlds" className="nav-link">
                Worlds
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/website/faqs" className="nav-link">
                FAQs
              </NavLink>
            </li>
            <li className="nav-item pt-3">
              <NavLink to="/website/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </header>
        <header className="d-flex flex-wrap justify-content mb-5 pb-2 border-bottom"></header>
      </div>
    </div>
  );
};

export default Navbar;
