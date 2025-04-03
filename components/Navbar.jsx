import React from "react";
import styles from "../styles/styles.module.css";
import Image from 'next/image';
import Dipimg from "../public/images/DIP.png";
import Head from 'next/head';
import Link from 'next/link'
import CustomButton from '../components/randomSubtitle'

const Navbar = () => {
  return (
    <div className="container" id="Navbar">
      <div className="row">
        <header className="d-flex flex-wrap justify-content-center pt-3">
          <Image 
            className="bi me-2 icon"
            width={60}
            height={60}
            src={Dipimg}
            alt="Dippy"
          />
          <div className="stacked-title mb-3 mb-md-0 me-md-auto link-body-emphasis">
            <a
              href="/"
              className="d-flex link-module align-items-center mb-0 mb-md-0 me-md-auto link-body-emphasis link-color-unique text-decoration-none"
            >
              <span className="fs-4">TerribleSpeller's Personal Website</span>
            </a>
            <span className="fs-6">
              {/*<i id="subtitle">Website so bad it gives actual programmers cancer</i>*/}
              <CustomButton />
            </span>
          </div>
          <ul className="nav ">
            <li className="nav-item pt-3">
              <Link href="/" className="nav-link link-module">
                <span>Home</span>
              </Link>
            </li>
            {/* <li className="nav-item pt-3">
              <Link href="/index" className="nav-link link-module">
              <span>Index</span>
              </Link>
            </li> */}
            <li className="nav-item pt-3">
              <Link href="/worlds" className="nav-link link-module">
              <span>Worlds</span>
              </Link>
            </li>
            <li className="nav-item pt-3">
              <Link href="/faqs" className="nav-link link-module">
              <span>FAQs</span>
              </Link>
            </li>
            <li className="nav-item pt-3 ">
              <Link href="/about" className="nav-link link-module">
              <span>About</span>
              </Link>
            </li>
          </ul>
        </header>
        <header className="d-flex flex-wrap justify-content mb-5 pb-2 border-bottom"></header>
      </div>
    </div>
    
  );
};

export default Navbar;
