import React from "react";
import "./Product.css";

function Product({ id, title, image, price, about }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <p className="title">{title}</p>
      <div className="about">
        <p>{about}</p>
      </div>
      <p className="product_price">
        <strong>$</strong>
        <strong>{price}</strong>
      </p>
    </div>
  );
}
export default Product;
