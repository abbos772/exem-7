"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";
import Radio from "@mui/material/Radio";
import "./Single.css";

const Singlewrapper = ({ data }) => {
  const [count, setCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState("a");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const totalPrice = (data?.price || 0) * count;

  console.log(data);
  return (
    <div>
      <div className="nav_bottom">
        <h3>Home</h3>
        <p>/</p>
        <h3>Hot Deal</h3>
        <p>/</p>
        <h4>{data?.category}</h4>
      </div>
      <div className="container">
        <div className="single">
          <div className="flex_cart">
            <div className="single_cart">
              <Image src={data?.image} alt="single" width={200} height={200} />
            </div>
            <div className="single_minis">
              <div className="mini_cart">
                <Image src={data?.image} alt="single" width={50} height={50} />
              </div>
              <div className="mini_cart">
                <Image src={data?.image} alt="single" width={50} height={50} />
              </div>
              <div className="mini_cart">
                <Image src={data?.image} alt="single" width={50} height={50} />
              </div>
              <div className="mini_cart">
                <Image src={data?.image} alt="single" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="single_text">
            <h1>{data?.category}</h1>
            <div className="rating">
              <Rating />
              <p>{data?.rating.rate} reviews</p>
              <h4>Submit a review</h4>
            </div>
            <div className="single_price">
              <h3>${totalPrice.toFixed(2)}</h3>
              <h4>Original Price: ${data?.price}</h4>
              <p>50% Off</p>
            </div>
            <div className="in">
              <h2>Availability:</h2>
              <h2>In stock</h2>
            </div>
            <div className="in">
              <h2>Category:</h2>
              <h2>{data?.category}</h2>
            </div>
            <div className="an">
              <h2>Free shipping</h2>
            </div>
            <div className="in">
              <h2>Select Color:</h2>
              <div>
                <Radio
                  {...controlProps("a")}
                  sx={{
                    color: "red",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
                <Radio
                  {...controlProps("c")}
                  sx={{
                    color: "blue",
                    "&.Mui-checked": {
                      color: "blue",
                    },
                  }}
                />
                <Radio
                  {...controlProps("b")}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <Radio
                  {...controlProps("e")}
                  sx={{
                    color: "yellow",
                    "&.Mui-checked": {
                      color: "yellow",
                    },
                  }}
                />
              </div>
            </div>
            <div className="in">
              <h2 className="size">Size:</h2>
              <select name="" id="">
                <option value="XS">XS</option>
                <option value="XL">XL</option>
                <option value="XLS">XLS</option>
              </select>
            </div>
            <div className="counter">
              <div className="count">
                <button onClick={incrementCount}>+</button> {count}{" "}
                <button disabled={count <= 1} onClick={decrementCount}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlewrapper;
