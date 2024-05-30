"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { removeItemFromCart } from "@/lib/slice/cardslice";
import x from "@/img/x.png";
import left from "@/img/left.png";
import { Toaster, toast } from "react-hot-toast";
import "./cart.scss";

function WishWrap() {
  const [toggle, setToggle] = useState(false);
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

  const handlePayment = () => {
    toast.success("Payment Successful!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      iconTheme: {
        primary: "#4CAF50",
        secondary: "#FFFAEE",
      },
    });
    setToggle(false);
  };

  const totalPrice = data
    ?.reduce((acc, e) => {
      const count = quantities[e.id] || 1;
      return acc + (e.price || 0) * count;
    }, 0)
    .toFixed(2);

  const pro = data?.map((e) => {
    const count = quantities[e.id] || 1;
    const itemTotalPrice = (e.price || 0) * count;

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
          <h4>${itemTotalPrice.toFixed(2)}</h4>
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
      <Toaster />
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
        <div className="flex_sub">
          <div className="last1">
            <button className="btn_out">Redeem</button>
          </div>
          <div className="subtotal">
            <div className="pr_t">
              <div className="total_price">TOTAL</div>
              <div className="Value_price">${totalPrice}</div>
            </div>
            <button
              className="btn_ch"
              style={{ marginLeft: "12px" }}
              onClick={() => setToggle(!toggle)}
            >
              Check Out
            </button>
            <div className={`big_box ${toggle ? "show" : ""}`}>
              <button
                className="btn_check"
                style={{ marginLeft: "12px" }}
                onClick={() => setToggle(!toggle)}
              >
                <Image src={left} alt="x" width={30} />
              </button>
              <div className="yana">
                <div className="yana11">
                  <div className="yana1">
                    <input type="text" placeholder="First Name" name="" id="" />
                  </div>
                  <div className="yana1">
                    <input type="text" placeholder="Last Name" name="" id="" />
                  </div>
                </div>
                <div className="yana11">
                  <div className="yana1">
                    <input
                      placeholder="Email Address"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <textarea
                    placeholder="Address for Delivery"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <button className="btn_ch" onClick={handlePayment}>
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishWrap;
