"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../lib/slice/wishlistSlice";
import Product from "../Products/Product";

function WishWrap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.wishes.value);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default WishWrap;
