import { createSlice } from "@reduxjs/toolkit";

const getInitialWishlistState = () => {
  if (typeof window !== "undefined") {
    const wishes = localStorage.getItem("wishes");
    return wishes ? JSON.parse(wishes) : [];
  }
  return [];
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    initialize(state) {
      state.value = getInitialWishlistState();
    },
    toggleLike(state, action) {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("wishes", JSON.stringify(state.value));
      }
    },
  },
});

export const { initialize, toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
