import "./Header.css";

function Header() {
  return (
    <div className="header_nav">
      {/* <link to="/orders"> */}
      <div className="header_option">
        <span className="header_optionLineOne" id="shopkart">
          ShopKart
        </span>
      </div>
      {/* </link> */}
      {/* 1st link */}
      <div className="header_option">
        <span className="header_optionLineOne">WISHLIST(0)</span>
      </div>
      {/* 2st link */}
      <div className="header_option">
        <span className="header_optionLineOne">BAG(0)</span>
      </div>
      {/* 3st link */}
      {/* 3 links one on the extreme and left and other two on the right */}
    </div>
  );
}

export default Header;
