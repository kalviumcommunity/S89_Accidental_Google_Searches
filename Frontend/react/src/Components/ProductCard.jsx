import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, description }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
