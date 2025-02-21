import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import axios from "axios";
import classes from "./Product.module.css";

const Product = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={classes.products_container}>
      {products.map((singleproduct) => {
        return <ProductCard product={singleproduct} key={singleproduct.id} />;
      })}
    </section>
  );
};

export default Product;
