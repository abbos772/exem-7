"use client";
import React, { memo } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import { LuHeart } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toogleLike } from "@/lib/slice/wishlistSlice";
import { addToCart } from "@/lib/slice/cardslice";
import Link from "next/link";
import PropTypes from "prop-types";
import "./Product.scss";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishes.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <div className="carts container">
      {data.map((product) => (
        <div key={product.id} className="product_card">
          <div className="product_card_img">
            <div className="product_hover">
              <Image
                alt={product.title}
                width={200}
                height={200}
                src={product.image}
              />
              <div className="pro_svgs">
                <div className="pro_like">
                  <button
                    className="as"
                    onClick={() => dispatch(toogleLike(product))}
                  >
                    {wishes.some((item) => item.id === product.id) ? (
                      <LuHeart style={{ color: "red" }} />
                    ) : (
                      <LuHeart />
                    )}
                  </button>
                </div>
                <div className="pro_cart">
                  <button
                    className="as"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    {cart.some((item) => item.id === product.id) ? (
                      <FiShoppingCart className="as" />
                    ) : (
                      <FiShoppingCart className="as" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pro_text">
            <div className="product_card_text">
              <Link href={`/single/${product.id}`}>
                <h3>{product.title.slice(0, 25)}...</h3>
              </Link>
              <Rating value={product.rating} readOnly />
            </div>
            <div className="product_card_text2">
              <h3>${product.price.toFixed(2)}</h3>
              <p>${(product.price * 1.2).toFixed(2)}</p>
              <b>{Math.round(product.price / 2)}%</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number,
    })
  ).isRequired,
};

export default memo(Product);
