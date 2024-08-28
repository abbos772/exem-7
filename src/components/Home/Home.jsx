import Image from "next/image";
import sumka from "@/img/sumka.png";
import cross from "@/img/cross.png";
import redcross from "@/img/redcross.png";
import shoe from "@/img/shoe.png";
import tex1 from "@/img/tex1.png";
import tex2 from "@/img/tex2.png";
import tex3 from "@/img/tex3.png";
import nike1 from "@/img/nike1.png";
import figma from "@/img/figma.png";
import tony from "@/img/tony.png";
import kronos from "@/img/kronos.png";
import "./page.scss";
import Product from "../Products/Product";
import { Rating } from "@mui/material";
import { getData } from "@/fetch/index";
import React, { memo } from "react";
const Home = async () => {
  let data = await getData("products");

  return (
    <div>
      <div className="home">
        <div className="home_img ">
          <div className="home_img_text container">
            <h1>
              Super Flash Sale <br />
              50% Off
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="card_nikeairs">
            <div className="card_nike">
              <div className="card_img">
                <h2>FS - QUILTED MAXI CROSS BAG...</h2>
                <Image src={sumka} alt="sumka" width={350} height={350} />
              </div>
              <div className="nike_price">
                <p>
                  $534,33 <b>24%off</b>
                </p>
              </div>
              <div className="nike_big_price">
                <h3>$299,43</h3>
              </div>
            </div>
            <div className="card_nike">
              <div className="card_img">
                <h2>
                  FS - Nike Air... <br />
                </h2>

                <Image src={cross} alt="sumka" width={350} height={350} />
              </div>
              <div className="nike_price">
                <p>
                  $534,33 <b>24%off</b>
                </p>
              </div>
              <div className="nike_big_price">
                <h3>$299,43</h3>
              </div>
            </div>
            <div className="card_nike">
              <div className="card_img">
                <h2> FS - 200 Nike Air... </h2>
                <Image src={redcross} alt="sumka" width={350} height={350} />
              </div>
              <div className="nike_price">
                <p>
                  $534,33 <b>24%off</b>
                </p>
              </div>
              <div className="nike_big_price">
                <h3>$299,43</h3>
              </div>
            </div>
          </div>
          <div className="cards_text">
            <h1>BEST SELLER</h1>
            <div className="cards_text_href">
              <p>All</p>
              <p>Bags</p>
              <p>Sneakers</p>
              <p>Belt</p>
              <p>Sunglasses</p>
            </div>
            <div className="cards">
              <Product data={data} />
            </div>
            <button>Load More</button>
          </div>
        </div>
        <div className="blue">
          <div className="container">
            <div className="blue_flex">
              <div className="blue_text ">
                <h1>
                  Adidas Men Running <br /> Sneakers
                </h1>
                <p>Performance and design. Taken right to the edge.</p>
                <h4>SHOP NOW</h4>
              </div>
              <div className="blue_img container">
                <Image src={shoe} alt="shoe" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tex">
            <div className="tex1">
              <Image src={tex1} alt="tex1" />
              <h3>FREE SHIPPING</h3>
              <p>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br /> industry.
              </p>
            </div>
            <div className="tex1">
              <Image src={tex2} alt="tex1" />

              <h3>100% REFUND</h3>
              <p>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br /> industry.
              </p>
            </div>
            <div className="tex1">
              <Image src={tex3} alt="tex1" />
              <h3>SUPPORT 24/7</h3>
              <p>
                Lorem Ipsum is simply <br /> dummy text of the <br /> printing
                and typesetting <br /> industry.
              </p>
            </div>
          </div>
          <div className="brends">
            <h3 className="hh3">LATEST NEWS</h3>
            <div className="brend_carts">
              <div className="brend_bir">
                <div>
                  <Image src={nike1} />
                </div>
                <div className="brend_text">
                  <p>01 Jan, 2015</p>
                  <h3>Fashion Industry</h3>
                  <h4>
                    Lorem Ipsum is simply <br /> dummy text of the <br />{" "}
                    printing and typesetting <br /> industry.
                  </h4>
                </div>
              </div>
              <div className="brend_bir">
                <div>
                  <Image src={figma} />
                </div>
                <div className="brend_text">
                  <p>01 Jan, 2015</p>
                  <h3>Best Design Tools</h3>
                  <h4>
                    Lorem Ipsum is simply <br /> dummy text of the <br />{" "}
                    printing and typesetting <br /> industry.
                  </h4>
                </div>
              </div>
              <div className="brend_bir">
                <div>
                  <Image src={kronos} />
                </div>
                <div className="brend_text">
                  <p>01 Jan, 2015</p>
                  <h3>HR Community</h3>
                  <h4>
                    Lorem Ipsum is simply <br /> dummy text of the <br />{" "}
                    printing and typesetting <br /> industry.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="brends">
            <h3 className="hh3">FEATURED PRODUCTS</h3>
            <div className="brend_carts" style={{ gap: "5px" }}>
              <div className="brend_bir">
                <div>
                  <Image src={tony} />
                </div>
                <div className="brend_text">
                  <h3>Blue Swade Nike Sneakers</h3>
                  <Rating />
                  <div className="tony">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
              <div className="brend_bir">
                <div>
                  <Image src={tony} />
                </div>
                <div className="brend_text">
                  <h3>Blue Swade Nike Sneakers</h3>
                  <Rating />
                  <div className="tony">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
              <div className="brend_bir">
                <div>
                  <Image src={tony} />
                </div>
                <div className="brend_text">
                  <h3>Blue Swade Nike Sneakers</h3>
                  <Rating />
                  <div className="tony">
                    <h3>$499</h3>
                    <p>$599</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="last_search">
              <input type="text" placeholder="Search query..." />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Home);
