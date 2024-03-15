// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// const ShippingScreeng = () => {
//   // State for shipping information
//   const [shippingInfo, setShippingInfo] = useState({
//     fullName: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   });

//   // State for payment method
//   const [paymentMethod, setPaymentMethod] = useState('PayPal');

//   // Hook for navigation
//   const navigate = useNavigate();

//   // Handle input changes for shipping information
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
//   };

//   // Handle payment method change
//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log shipping information and payment method (replace with your logic)
//     console.log('Shipping info:', shippingInfo);
//     console.log('Payment method:', paymentMethod);
//     // Add your logic for submitting the form data
//     // Redirect to the payment screen
//     navigate('/payment');
//   };

//   return (
//     <div>
//       <h2>Shipping Information</h2>
//       {/* Shipping information form */}
//       <Form onSubmit={handleSubmit}>
//         {/* Dynamically generate form fields based on shippingInfo state */}
//         {Object.entries(shippingInfo).map(([key, value]) => (
//           <Form.Group key={key} controlId={key}>
//             <Form.Label>
//               {key.charAt(0).toUpperCase() + key.slice(1)}
//             </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder={`Enter your ${key.toLowerCase()}`}
//               name={key}
//               value={value}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
//         ))}
//         <h2>Payment Method</h2>
//         Radio buttons for payment method selection
//         {['PayPal', 'Credit Card'].map((method) => (
//           <Form.Check
//             key={method}
//             type="radio"
//             label={method}
//             id={method.toLowerCase().replace(' ', '-')}
//             name="paymentMethod"
//             value={method}
//             checked={paymentMethod === method}
//             onChange={handlePaymentChange}
//           />
//         ))}
//         {/* Submit button */}
//         <Button type="submit" variant="primary">
//           Continue to Payment
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ShippingScreeng;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShippingScreen = () => {
  const navigate = useNavigate(); // for back button

  const [shippingName, setShippingName] = useState('');
  const [shippingAddress1, setShippingAddress1] = useState('');
  const [shippingAddress2, setShippingAddress2] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingPostCode, setShippingPostCode] = useState('');
  const [shippingCountry, setShippingCountry] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/shipping', {
        fullName: shippingName,
        addressLine1: shippingAddress1,
        addressLine2: shippingAddress2,
        city: shippingCity,
        postalCode: shippingPostCode,
        country: shippingCountry,
      });

      console.log('Shipping added successfully:', response.data);
    } catch (error) {
      console.error('Error adding shipping:', error);
    }
  };

  const goBackToPayment = () => {
    navigate('/payment'); // Replace '/admin-panel' with the actual route for your admin panel
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Add Shipping</h2>
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
              required
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
              required
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
