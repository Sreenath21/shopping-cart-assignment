import React from "react";

import "./Header.scss";
import CartIcon from "../../static/images/cart.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-name">
          <img
            className="brand-logo"
            src="../../static/images/logo.png"
            alt="Sabka Bazaar Logo"
            height="60"
            width="100"
          />
        </div>

        <div className="left-nav">
          <ul className="tabs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          {/* If logged in */}
          {/* <ul className="links">
            <li>
              <a href="#">Logout</a>
            </li>
          </ul> */}

          {/* If not signed out */}
          <ul className="links">
            <li>
              <a href="/login">SignIn</a>
            </li>
            <li>
              <a href="/sign-up">Register</a>
            </li>
          </ul>

          <div className="my-cart">
            <a href="/cart">
              <img src="../../static/images/cart.svg" alt="" />
              {/* <CartIcon /> */}
              <span>1</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
