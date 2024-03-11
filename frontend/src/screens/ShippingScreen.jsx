import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ShippingScreen = () => {
  // State for shipping information
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // State for payment method
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  // Hook for navigation
  const navigate = useNavigate();

  // Handle input changes for shipping information
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Handle payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log shipping information and payment method (replace with your logic)
    console.log('Shipping info:', shippingInfo);
    console.log('Payment method:', paymentMethod);
    // Add your logic for submitting the form data
    // Redirect to the payment screen
    navigate('/payment');
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      {/* Shipping information form */}
      <Form onSubmit={handleSubmit}>
        {/* Dynamically generate form fields based on shippingInfo state */}
        {Object.entries(shippingInfo).map(([key, value]) => (
          <Form.Group key={key} controlId={key}>
            <Form.Label>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter your ${key.toLowerCase()}`}
              name={key}
              value={value}
              onChange={handleChange}
              required
            />
          </Form.Group>
        ))}
        <h2>Payment Method</h2>
        Radio buttons for payment method selection
        {['PayPal', 'Credit Card'].map((method) => (
          <Form.Check
            key={method}
            type="radio"
            label={method}
            id={method.toLowerCase().replace(' ', '-')}
            name="paymentMethod"
            value={method}
            checked={paymentMethod === method}
            onChange={handlePaymentChange}
          />
        ))}
        {/* Submit button */}
        <Button type="submit" variant="primary">
          Continue to Payment
        </Button>
      </Form>
    </div>
  );
};

export default ShippingScreen;
