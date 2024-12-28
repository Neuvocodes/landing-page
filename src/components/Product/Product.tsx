import React from "react";
import { dataProduct } from "../../types/product/product";
import "./Product.css";

const Product: React.FC<dataProduct> = ({ image, description, name }) => {
  return (
    <div className="container-product">
      <img className="image-product" src={image} alt="" />

      <div className="product-body">
        <h4 className="title">{name}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

const ProductSlider: React.FC<{ products: dataProduct[] }> = ({ products }) => {
  return (
    <div className="product-component" id="product">
      <div className="product-title">
        <h3>Our Products</h3>
      </div>
      <div className="product-slider">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export { Product, ProductSlider };
