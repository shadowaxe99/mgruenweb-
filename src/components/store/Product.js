import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className='product-actions'>
        <span className='product-price'>${product.price}</span>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
