"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { MdOutlineSearch } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/img/FOOTER.png";
import "./Navbar.scss";

function Navbar() {
  const [shrink, setShrink] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setShrink(window.scrollY > 50);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
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
                <Link href={"/pages/Login"}>
                  <span>
                    <HiOutlineUser />
                  </span>
                </Link>
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
        <Link className="link" href={"/"}>
          <div>
            <Image src={Logo} alt="logo" />
          </div>
        </Link>
        <div
          className={`navbar_href ${toggle ? "show" : ""} ${
            shrink ? "shrink" : ""
          }`}
        >
          <Link className="link" href={"/"}>
            <p>HOME</p>
          </Link>
          <p>BAGS</p>
          <p>SNEAKERS</p>
          <p>BELT</p>
          <Link className="link" href={"/pages/Contact"}>
            <p>CONTACT</p>
          </Link>
        </div>
        <button className="menu" onClick={() => setToggle(!toggle)}>
          <CiMenuBurger />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
