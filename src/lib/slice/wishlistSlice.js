import { createSlice } from "@reduxjs/toolkit";
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    setWishes(state, action) {
      state.value = action.payload;
    },
    toggleLike(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("wishes", JSON.stringify(state.value));
    },
  },
});

export const { setWishes, toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
