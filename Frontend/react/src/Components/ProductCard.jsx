import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, category, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p className="category">{category}</p>
      <p className="price">₹{price}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ProductCard;
