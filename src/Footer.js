import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      style={{
        background: `url('${process.env.PUBLIC_URL}/Group 229.png')`,
      }}
    >
      <div className="footer">
        <div className="footer__left">
          <img src="Group 225.png" alt="" />
          <div className="footer__lefttext1">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor
          </div>
          <div className="footer__lefttext2">© Copyright 2020 Nature</div>
        </div>
        <div className="footer__middle">
          <div className="title">Information</div>
          <ul className="middleul">
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>About Us</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="footer__right">
          <div className="title">Follow Us</div>
          <ul className="rightul">
            <li>
              <img src="Group 99.png" alt="" />
            </li>
            <li>
              <img src="Group 100.png" alt="" />
            </li>
            <li>
              <img src="Group 105.png" alt="" />
            </li>
            <li>
              <img src="Group 100.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
