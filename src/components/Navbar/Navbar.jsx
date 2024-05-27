"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Logo from "@/app/img/FOOTER.png";
import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar-container ${shrink ? "shrink" : ""}`}>
        <div className="navbar_top">
          <div className="container">
            <div className="nav_top_flex">
              <div className="top_language">
                <select name="" id="">
                  <option value="EN">En</option>
                  <option value="RU">Ru</option>
                  <option value="UZB">Uzb</option>
                </select>
                <select name="" id="">
                  <option value="USD">USD</option>
                  <option value="RUB">RUB</option>
                  <option value="SUM">SUM</option>
                </select>
              </div>
              <div className="icons">
                <div className="icon">
                  <span>
                    <HiOutlineUser />
                  </span>
                  <span>
                    <LuHeart />
                  </span>
                  <span>
                    <LuShoppingCart />
                  </span>
                </div>
                <h3>Items</h3>
                <div className="search_price">
                  <p>$0.00</p>
                  <span>
                    <MdOutlineSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar container">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className={`navbar_href ${toggle ? "show" : ""} ${shrink ? "shrink" : ""}`}>
            <p>HOME</p>
            <p>BAGS</p>
            <p>SNEAKERS</p>
            <p>BELT</p>
            <p>CONTACT</p>
          </div>
          <button className="menu" onClick={() => setToggle(!toggle)}>
            <CiMenuBurger />
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
