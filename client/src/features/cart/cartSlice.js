import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsAdded: [],
  cartPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.itemsAdded.push(action.payload);
      state.cartPrice = state.itemsAdded.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const { newItems, newCartPrice } = updateQuantity(
        state,
        action,
        "increase"
      );
      state.cartPrice = newCartPrice;
      state.itemsAdded = newItems;
    },

    decreaseQuantity: (state, action) => {
      const { newItems, newCartPrice } = updateQuantity(
        state,
        action,
        "decrease"
      );

      state.cartPrice = newCartPrice;
      state.itemsAdded = newItems;
    },
  },
});

function updateQuantity(currentState, action, type) {
  const newItems = currentState.itemsAdded
    .map((item) => {
      if (item.id === action.payload) {
        const newQuantity =
          type === "increase"
            ? item.quantity < item.stock
              ? item.quantity + 1
              : item.quantity
            : item.quantity - 1;

        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * item.unitPrice,
        };
      }

      return { ...item };
    })
    .filter((item) => item.quantity > 0);

  const newCartPrice = newItems.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return { newItems, newCartPrice };
}

export const { addItemToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
