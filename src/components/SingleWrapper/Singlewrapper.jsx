"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { LuHeart } from "react-icons/lu";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Radio from "@mui/material/Radio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import React, { memo, useState, useEffect } from "react";
import Product from "../Products/Product";
import cart2 from "@/img/cart_2.png";
import { Circles } from "react-loader-spinner";
import "./Single.css";
import "swiper/css";
import "swiper/css/pagination";

const Singlewrapper = ({ single_data, data }) => {
  const [count, setCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState("a");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);
  const decrementCount = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

  const handleChange = (event) => setSelectedValue(event.target.value);

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const totalPrice = (single_data?.price || 0) * count;

  if (loading) {
    return (
      <div className="loader">
        <Circles height="80" width="80" color="#00BFFF" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <div>
      <div className="nav_bottom">
        <h3>Home</h3>
        <p>/</p>
        <h3>Hot Deal</h3>
        <p>/</p>
        <h4>{single_data?.category}</h4>
      </div>
      <div className="container">
        <div className="single">
          <div className="flex_cart">
            <div className="single_cart">
              {single_data?.image && (
                <Image
                  src={single_data.image}
                  alt="single"
                  width={200}
                  height={200}
                />
              )}
            </div>
            <div className="single_minis">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mini_cart">
                  {single_data?.image && (
                    <Image
                      src={single_data.image}
                      alt="single"
                      width={50}
                      height={50}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="single_text">
            <h1>{single_data?.category}</h1>
            <div className="rating">
              <Rating value={single_data?.rating?.rate || 0} readOnly />
              <p>{single_data?.rating?.rate} reviews</p>
              <h4>Submit a review</h4>
            </div>
            <div className="single_price">
              <h3>${totalPrice.toFixed(2)}</h3>
              <h4>Original Price: ${single_data?.price}</h4>
              <p>50% Off</p>
            </div>
            <div className="in">
              <h2>Availability:</h2>
              <h2>In stock</h2>
            </div>
            <div className="in">
              <h2>Category:</h2>
              <h2>{single_data?.category}</h2>
            </div>
            <div className="an">
              <h2>Free shipping</h2>
            </div>
            <div className="in">
              <h2>Select Color:</h2>
              <div className="radioo">
                {["red", "blue", "black", "yellow"].map((color, index) => (
                  <Radio
                    key={index}
                    {...controlProps(color.charAt(0))}
                    sx={{
                      color,
                      "&.Mui-checked": {
                        color,
                      },
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="in">
              <h2 className="size">Size:</h2>
              <select name="size" id="size">
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
              <div className="add">
                <button className="add_cart">
                  <Image src={cart2} alt="cart" width={20} height={20} /> Add To
                  Cart
                </button>
                <button className="wish">
                  <LuHeart />
                </button>
              </div>
            </div>
            <div className="face">
              <button>
                <FaFacebookF /> Share on Facebook
              </button>
              <button style={{ background: "rgb(3, 169, 244)" }}>
                <FaTwitter /> Share on Twitter
              </button>
            </div>
          </div>
          <div className="swiper">
            <div className="swip_cart">
              <div className="swip_img">
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {[...Array(2)].map((_, index) => (
                    <SwiperSlide key={index}>
                      {single_data?.image && (
                        <Image
                          alt="product"
                          width={200}
                          height={200}
                          src={single_data.image}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="swip_rt">
                <Rating value={single_data?.rating?.rate || 0} readOnly />
                <div className="rt">
                  <p>${single_data?.price}</p>
                  <h4>${single_data?.price * 1.5}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sing_lorems">
          <div className="lorem_text">
            <h1>Product Information</h1>
            <h1>Reviews</h1>
            <h1>Another tab</h1>
          </div>
          <div className="das">
            <p>
              Air max are always very comfortable fit, clean and just perfect in
              every way. Just the box was too small and scrunched the sneakers
              up a little bit. Not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              Air max are always very comfortable fit, clean and just perfect in
              every way. Just the box was too small and scrunched the sneakers
              up a little bit. Not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              Air max are always very comfortable fit, clean and just perfect in
              every way. Just the box was too small and scrunched the sneakers
              up a little bit. Not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
          </div>
        </div>
        <div className="si">
          <h1>RELATED PRODUCTS</h1>
          <Product data={data.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
};

export default memo(Singlewrapper);
