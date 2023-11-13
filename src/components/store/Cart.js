import React from 'react';

const Cart = ({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  return (
    <div className='cart'>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <div className='cart-item-actions'>
                  <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </div>
              <span className='cart-item-price'>${item.price}</span>
            </div>
          ))}
          <div className='cart-total'>
            <strong>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
          </div>
          <button onClick={onEmptyCart} className='empty-cart'>Empty Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
