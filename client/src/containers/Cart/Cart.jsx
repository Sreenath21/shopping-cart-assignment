import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "../../components/CartItem/CartItem";

import "./Cart.scss";

const Cart = () => {
  const navigate = useNavigate();
  const { itemsAdded: items, cartPrice } = useSelector((state) => state.cart);
  const userAuthentication = "logged-in";

  const onButtonClick = () => {
    if (items.length > 0) {
      userAuthentication === "logged-in"
        ? navigate("/home")
        : navigate("/login");
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="cart">
      {items.length > 0 ? (
        <div className="cart-filled">
          <h2>My Cart</h2>
          <section>
            {items.map((_) => {
              return (
                <div key={_.id} className="item">
                  <CartItem productId={_.id} />
                </div>
              );
            })}
            <div className="advertisment">
              <img
                src="/static/images/lowest-price.png"
                alt=""
                className="addv-image"
              />
              &nbsp;You won't find it cheaper anywhere!
            </div>
          </section>
        </div>
      ) : (
        <div className="cart-empty">
          <div>
            <h2>No items in your cart</h2>
            <p>Your favorite items are just a click away</p>
          </div>
        </div>
      )}
      <div className="buttons">
        <button
          type="button"
          onClick={onButtonClick}
          onKeyDown={onButtonClick}
          tabIndex={0}
        >
          {items.length > 0
            ? `Proceed to checkout Rs.${cartPrice}`
            : "Start Shopping"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
