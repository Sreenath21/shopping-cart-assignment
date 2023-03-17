import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";

import "./Cart.scss";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const items = cart.itemsAdded;

  const onButtonClick = () => {
    if (items.length > 0) {
    }
  };

  return (
    <div className="cart">
      {items.length > 0 ? (
        <div className="cart-filled">
          <h2>My Cart</h2>
          <section>
            {items.map((_) => {
              return <div key={_.id} className="item"></div>;
            })}
          </section>
        </div>
      ) : (
        <div className="cart-empty">
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
