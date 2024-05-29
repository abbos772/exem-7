import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
