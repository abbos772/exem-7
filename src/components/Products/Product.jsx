import React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import "./Product.scss";
const Product = ({ data }) => {
  let product = data?.map((el) => (
    <div key={el.id} className="product_card">
      <div className="product_card_img">
        <div className="product_hover">
          <Image alt={el?.title} width={200} height={200} src={el?.image} />
          <div className="pro_svgs">
            <div className="pro_like">
              <LuHeart />
            </div>
            <div className="pro_cart">
              <FiShoppingCart />
            </div>
          </div>
        </div>
      </div>
      <div className="pro_text">
        <div className="product_card_text">
          <Link href={`/single/${el.id}`}>
            <h3>{el.title.slice(0, 25)}...</h3>
          </Link>
          <Rating />
        </div>
        <div className="product_card_text2">
          <h3>${el.price}</h3>
          <p>${el.price * 1.2}</p>
          <b>{Math.round(el.price / 2)}%</b>
        </div>
      </div>
    </div>
  ));
  return <div className="carts container">{product}</div>;
};

export default Product;
