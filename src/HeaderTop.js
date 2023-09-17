import React from "react";
import "./HeaderTop.css";

function HeaderTop() {
  return (
    <div className="headerTop_nav">
      {/*link to =orders">*/}
      <div className="container">
        <span className="headeroptionLineTop">FREE DELIVERY</span>
      </div>
      {/**2nd link*/}
      <div className="container">
        <span className="headeroptionLineTop">RETURN POLICY</span>
      </div>
      {/*3rd link*/}
      <div className="container">
        <span className="headeroptionLineTop">LOGIN</span>
      </div>
      {/*4th link*/}
      <div className="container">
        <span className="headeroptionLineTop">FOLLOW US</span>
      </div>
      {/*5th link */}
      <div className="container">
        <img src="./facebook.png" alt="" height="40px" />
      </div>
      {/*6th link */}
      <div className="container">
        <img src="./instagram.jpg" alt="" height="40px" />
      </div>
      {/*7th link */}
      <div className="container">
        <img src="./Twitter.png" alt="" height="40px" />
      </div>
      {/*8th link*/}
      <div className="container">
        <img src="./linkedin.png" alt="" height="40px" />
      </div>
    </div>
  );
}

export default HeaderTop;
