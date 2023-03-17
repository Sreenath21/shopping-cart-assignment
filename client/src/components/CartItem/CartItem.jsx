import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";

import "./CartItem.scss";

const CartItem = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector(
    (state) =>
      state.products &&
      state.products.data &&
      state.products.data.find((_) => _.id === productId)
  );

  const purchaseDetails = useSelector(
    (state) =>
      state.cart &&
      state.cart.itemsAdded &&
      state.cart.itemsAdded.find((_) => _.id === productId)
  );

  const onIncrement = () => {
    dispatch(increaseQuantity(productId));
  };

  const onDecrement = () => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.imageURL} alt={product.name} height={80} />
      </div>
      <div className="purchase-description">
        <div className="item-name">{product.name}</div>
        <div className="item-quantity">
          <button
            type="button"
            className="qty-btn left"
            aria-label="decrease quantity by one"
            onClick={onDecrement}
          >
            -
          </button>
          <span>{purchaseDetails.quantity}</span>
          <button
            type="button"
            className="qty-btn right"
            aria-label="increase quantity by one"
            onClick={onIncrement}
          >
            +
          </button>
          &nbsp;
          <span aria-label="multiplied by">x</span>&nbsp;Rs.{" "}
          {purchaseDetails.unitPrice}
        </div>
      </div>
      <div className="item-price">Rs.{purchaseDetails.totalPrice}</div>
    </div>
  );
};

export default CartItem;
