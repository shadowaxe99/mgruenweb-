import React from 'react';
import Product from './Product';

const OnlineStore = ({ products, onAddToCart }) => {
  return (
    <div className='online-store'>
      <h2>Merchandise</h2>
      <div className='products-grid'>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default OnlineStore;
