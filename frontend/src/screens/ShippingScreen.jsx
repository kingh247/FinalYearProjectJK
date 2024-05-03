import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShippingScreen = () => {
  const navigate = useNavigate(); // for back button

  // State variables to store the input values for shipping details

  const [shippingName, setShippingName] = useState('');
  const [shippingAddress1, setShippingAddress1] = useState('');
  const [shippingAddress2, setShippingAddress2] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingPostCode, setShippingPostCode] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Post request to add shipping details
      const response = await axios.post('http://localhost:5000/api/shipping', {
        fullName: shippingName,
        addressLine1: shippingAddress1,
        addressLine2: shippingAddress2,
        city: shippingCity,
        postalCode: shippingPostCode,
        country: shippingCountry,
      });

      console.log('Shipping added successfully:', response.data);
      // Reset form fields
      setShippingName('');
      setShippingAddress1('');
      setShippingAddress2('');
      setShippingCity('');
      setShippingPostCode('');
      setShippingCountry('');
    } catch (error) {
      console.error('Error adding shipping:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const goBackToPayment = () => {
    navigate('/payment'); // naviagate the payment page
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Add Shipping</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="shippingName">Full Name:</label>
            <input
              type="text"
              id="shippingName"
              value={shippingName}
              onChange={(e) => setShippingName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingAddress1">Address Line 1:</label>
            <input
              type="text"
              id="shippingAddress1"
              value={shippingAddress1}
              onChange={(e) => setShippingAddress1(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingAddress2">Address Line 2:</label>
            <input
              type="text"
              id="shippingAddress2"
              value={shippingAddress2}
              onChange={(e) => setShippingAddress2(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingCity">City:</label>
            <input
              type="text"
              id="shippingCity"
              value={shippingCity}
              onChange={(e) => setShippingCity(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingPostCode">Postal Code:</label>
            <input
              type="text"
              id="shippingPostCode"
              value={shippingPostCode}
              onChange={(e) => setShippingPostCode(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="shippingCountry">Country:</label>
            <input
              type="text"
              id="shippingCountry"
              value={shippingCountry}
              onChange={(e) => setShippingCountry(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Shipping</button>
        </form>
        <button onClick={goBackToPayment}>Continue to payment</button>
      </div>
    </div>
  );
};

export default ShippingScreen;


