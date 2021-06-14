import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__navleft">
          <img src="Group 220.png" alt="" className="header__navlogo" />
          <div className="header__navheading">organic</div>
        </div>
        <div className="header__navright">
          <span>Home</span>
          <span>Product</span>
          <span>Blog</span>
          <span>About Us</span>
          <span id="contact">Contact Us</span>
        </div>
      </div>
      <div className="header__content">
        <div className="header__contentleft">
          <div className="header__contentleft1">Healthy life with</div>
          <div className="header__contentleft2">Nature Organic</div>
          <div className="header__contentleft3">
            Vegetables are the edible parts of a plant
            <br /> that is used in cooking or can be eaten now.
          </div>
          <Button
            style={{
              color: "white",
              backgroundColor: "#00dbd0",
              fontFamily: "Libre Baskerville",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Explore Now
          </Button>
        </div>
        <div className="header__contentright">
          <img className="img__top" src="Group 195.png" alt="" />
          <img className="img__bottom" src="Group 228.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
