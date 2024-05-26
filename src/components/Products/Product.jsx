import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import "./Product.scss";
const Product = ({ data }) => {
  let product = data?.map((el) => (
    <div key={el.id} className="product_card">
      <div className="product_card_img">
        <Image alt={el.title} width={200} height={200} src={el?.image} />
      </div>
      <div className="product_card_text">
        <h3>Nike Air Max 270 React</h3>
        <Rating />
      </div>
      <div className="product_card_text2">
        <h3>$299,43</h3>
        <p>$534,33</p>
        <b>24% Off</b>
      </div>
    </div>
  ));
  return <div className="carts container">{product}</div>;
};

export default Product;
