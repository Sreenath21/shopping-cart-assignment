import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import "./Header.scss";

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.itemsAdded.length);
  const { userAuthentication, toggleUserAuthentication } =
    useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="navbar">
        <div
          className="brand-name"
          onClick={() => {
            navigate("/home");
          }}
        >
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          {userAuthentication === "logged-in" ? (
            <ul className="links">
              <li
                onClick={() => {
                  sessionStorage.setItem("status", "");
                  toggleUserAuthentication();
                }}
              >
                <Link to="#">Logout</Link>
              </li>
            </ul>
          ) : (
            <ul className="links">
              <li>
                <Link to="/login">SignIn</Link>
              </li>
              <li>
                <Link to="/sign-up">Register</Link>
              </li>
            </ul>
          )}

          {/* 
          // If logged in
          <ul className="links">
            <li>
              <Link to="#">Logout</Link>
            </li>
          </ul>
          //  If not signed out 
          <ul className="links">
            <li>
              <Link to="/login">SignIn</Link>
            </li>
            <li>
              <Link to="/sign-up">Register</Link>
            </li>
          </ul>
          */}

          <div className="my-cart">
            <Link to="/cart">
              <img src="../../static/images/cart.svg" alt="" />
              <span
                style={
                  cartItemsCount > 0 ? { color: "#ea1d71" } : { color: "gray" }
                }
              >
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
