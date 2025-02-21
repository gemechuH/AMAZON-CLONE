import React from "react";
import Rating from "@mui/material/rating";
import CurrencyFormat from "../currencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card__container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div className={classes.title}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count  */}
          <small>{rating.count}</small>
        </div>
        <div className={classes.price}>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
