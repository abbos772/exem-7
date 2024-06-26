"use client";
import toggleLike from "@/lib/slice/wishlistSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
  return configureStore({
    reducer: {
      wishes: toggleLike,
    },
  });
};
