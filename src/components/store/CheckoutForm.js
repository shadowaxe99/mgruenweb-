import React, { useState } from 'react';

const CheckoutForm = ({ onCaptureCheckout }) => {
  const [orderData, setOrderData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onCaptureCheckout(orderData);
  };

  const handleChange = (event) => {
    setOrderData({ ...orderData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='firstName' placeholder='First Name' value={orderData.firstName} onChange={handleChange} />
      <input type='text' name='lastName' placeholder='Last Name' value={orderData.lastName} onChange={handleChange} />
      <input type='email' name='email' placeholder='Email' value={orderData.email} onChange={handleChange} />
      <input type='text' name='address' placeholder='Address' value={orderData.address} onChange={handleChange} />
      <input type='text' name='city' placeholder='City' value={orderData.city} onChange={handleChange} />
      <input type='text' name='zip' placeholder='ZIP / Postal Code' value={orderData.zip} onChange={handleChange} />
      <input type='text' name='country' placeholder='Country' value={orderData.country} onChange={handleChange} />
      <button type='submit'>Submit Order</button>
    </form>
  );
};

export default CheckoutForm;
