import React from "react";
// import StandardLink from "../links/standardLink";
import "./WholeBanner.css";

function MainBanner() {
  return (
    <div className="WholeBanner">
      <div className="yellow"></div>
      <div className="sub">
        <p className="Fresh">Fresh</p>
        <p className="year">2022</p>
        <p className="look">Look</p>
      </div>
      <div className="seeMore">
        {/* <StandardLink path="/iphone/iphone-14" name="see more" /> */}
      </div>
      <div className="container_img">
        <div className="men_logo">
          <img src="./kimjong.png" alt="" id="image" />
        </div>
        <div className="jacket_name">OREGON JACKET</div>
        <div className="price">$124</div>
      </div>
    </div>
  );
}

export default MainBanner;
