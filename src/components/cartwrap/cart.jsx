"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { removeItemFromCart } from "@/lib/slice/cardslice";
import x from "@/app/img/x.png";
import "./cart.scss";

function wishWrap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.value);

  const [quantities, setQuantities] = useState({});

  const incrementCount = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrementCount = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const pro = data?.map((e) => {
    const count = quantities[e.id] || 1;
    const totalPrice = (e.price || 0) * count;

    return (
      <div key={e.id} className="cart_pro">
        <div className="cart_img_title">
          <button onClick={() => dispatch(removeItemFromCart(e))}>
            <Image src={x} alt="x" />
          </button>
          <div className="cart_imgg">
            <Image src={e.image} alt="img" width={60} height={60} />
          </div>
          <h4>{e.title}</h4>
        </div>
        <div className="cart_price_total">
          <h4>
            <h4>${totalPrice.toFixed(2)}</h4>
          </h4>
          <div className="counter2">
            <div className="count">
              <button onClick={() => incrementCount(e.id)}>+</button> {count}{" "}
              <button
                disabled={count <= 1}
                onClick={() => decrementCount(e.id)}
              >
                -
              </button>
            </div>
          </div>
          <h4>${e.price}</h4>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="carts_pro container">
        <div className="pro_cart_text">
          <div className="pro_bir">
            <h4>PRODUCT</h4>
          </div>
          <div className="pro_bir">
            <h4>PRICE</h4>
            <h4>QTY</h4>
            <h4>UNIT PRICE</h4>
          </div>
        </div>
        {pro}
      </div>
    </div>
  );
}

export default wishWrap;