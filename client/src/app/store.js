import { configureStore } from "@reduxjs/toolkit";

import bannerReducer from "../features/banner/bannerSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

import usersReducer from "../features/users/UserSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
});
