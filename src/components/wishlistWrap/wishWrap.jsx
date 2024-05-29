"use client";
import React from "react";
import { useSelector } from "react-redux";
import Product from "../Products/Product";

function wishWrap() {
  let data = useSelector((s) => s.wishes.value);
  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default wishWrap;
