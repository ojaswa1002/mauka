import React from "react";
import "./Content.css";
import Rating from "./Rating";
import Button from "@material-ui/core/Button";
import Card from "./Card";

function Content() {
  return (
    <div className="content">
      <div className="content__top">
        <img className="content__topimg" src="Group 114.png" alt="" />
        <div className="content__toptext">
          <div className="content__text1">Welcome to Nature</div>
          <div className="content__text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="content__cards">
        <img className="content__cardimg" src="Group 207.png" alt="" />
        <img className="content__cardimg" src="Group 205.png" alt="" />
        <img className="content__cardimg" src="Group 207.png" alt="" />
        <img className="content__cardimg" src="Group 207.png" alt="" />
      </div>
      <div className="content__mid">
        <div className="content__text1">Proudly presented by</div>
        <div className="content__text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="content__midimages">
          <img className="content__midimg" src="Group 39.png" alt="" />
          <img className="content__midimg" src="Group 64.png" alt="" />
          <img className="content__midimg" src="Group 55.png" alt="" />
          <img className="content__midimg" src="Group 64.png" alt="" />
          <img className="content__midimg" src="Group 39.png" alt="" />
        </div>
        <div className="dots">
          <span class="dot"></span>
          <span class="dot1"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div className="content__bottom">
        <div className="content__bottomtext">
          <div className="content__bottomtextupper">
            <div>
              <img className="invert" src="Group 86.png" alt="" />
            </div>
            <div>
              <img className="jane" src="Group 1.png" alt="" />
            </div>
            <div className="jane__text">Jane Doe</div>
            <Rating />
            <div style={{ lineHeight: "2rem" }}>
              Thank you for all the amazing produce and products you deliver
              each week…
              <br />
              you make my life so easy an bring goodness into our family eating.{" "}
              <br />
              I’ve been roasting a lot of brussel sprouts and
            </div>
            <div className="dots">
              <span class="dot1"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
          </div>
          <div className="content__bottomtextlower">
            <div className="content__bottomtextlowertext">
              <div className="content__text1">Subscribe to Our Newsletter</div>
              <div className="content__text2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="content__subscribe">
                <span>
                  <input
                    placeholder="Enter your email address"
                    className="content__subscribeinput content__text2"
                    type="text"
                  />
                  <Button
                    style={{
                      borderRadius: "20px",
                      color: "white",
                      backgroundColor: "#00dbd0",
                      fontFamily: "Libre Baskerville",
                      fontWeight: "bold",
                      padding: "10px",
                    }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </span>
              </div>
              <div>
                <img className="content__topimg" src="Group 114.png" alt="" />
                <div className="content__toptext">
                  <div className="content__text1">Read Our Blog</div>
                  <div className="content__text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <Card image="Group 2.png" />
              <Card image="Group 4.png" />
              <Card image="Group 5.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
