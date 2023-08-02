import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <div className="container" id="Navbar">
        <div className="row">
          <header className="d-flex flex-wrap justify-content-center pt-3">
            <img className="bi me-2 icon" width="60" height="60" src="./images/DIP.png" alt="Dippy"/>
          <div className="stacked-title mb-3 mb-md-0 me-md-auto link-body-emphasis">
            <a href="index.html" className="d-flex align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <span className="fs-4">TerribleSpeller's Personal Website</span>
            </a>
            <span className="fs-6" style="margin-top:-5px;"><i>Website so bad it gives actual programmers cancer</i></span>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="index.html" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="./pages/404page.html" className="nav-link">Index</a></li>
            <li className="nav-item"><a href="./pages/worldbuild-main.html" className="nav-link">Worlds</a></li>
            <li className="nav-item"><a href="./pages/404page.html" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="./pages/404page.html" className="nav-link">About</a></li>
          </ul>
          </header>
          <header className="d-flex flex-wrap justify-content mb-5 pb-2 border-bottom">
          </header>
        </div>
        </div>
    );
};
 
export default Navbar;