import React from "react";
import "./Footer.css";
import Image from "next/image";
import Logo from "@/img/FOOTER.png";
import facebook from "@/img/facebook.png";
import twitter from "@/img/twitter.png";
import banner from "@/img/banner.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="foot">
            <div className="foot_bir">
              <div className="foot1">
                <Image src={Logo} alt="Logo" />
                <p>
                  Lorem Ipsum is simply dummy text of the <br /> printing and
                  typesetting industry. Lorem <br /> Ipsum has been the
                  industry's standard <br /> dummy text ever.Since the 1500s,
                  when <br /> an unknown printer.
                </p>
              </div>
              <div className="foot1">
                <h3>Follow Us</h3>
                <p>
                  Since the 1500s, when an unknown <br /> printer took a galley
                  of type and <br /> scrambled.
                </p>
                <div className="foot_icons">
                  <Image src={facebook} alt="facebook" />
                  <Image src={twitter} alt="twitter" />
                </div>
              </div>
              <div className="foot1">
                <h3>Contact Us</h3>
                <p>
                  E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
                </p>
              </div>
            </div>
            <div className="foot_bir">
              <div className="foot1">
                <h3>Infomation</h3>
                <h4>
                  About Us <br /> Infomation <br /> Privacy Policy <br /> Terms
                  & Conditions
                </h4>
              </div>
              <div className="foot1">
                <h3>Service</h3>
                <h4>
                  About Us <br /> Infomation <br /> Privacy Policy <br /> Terms
                  & Conditions
                </h4>
              </div>
              <div className="foot1">
                <h3>My Account</h3>
                <h4>
                  About Us <br /> Infomation <br /> Privacy Policy <br /> Terms
                  & Conditions
                </h4>
              </div>
              <div className="foot1">
                <h3>Our Offers</h3>
                <h4>
                  About Us <br /> Infomation <br /> Privacy Policy <br /> Terms
                  & Conditions
                </h4>
              </div>
            </div>
          </div>
          <div className="last_footer">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <Image src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
