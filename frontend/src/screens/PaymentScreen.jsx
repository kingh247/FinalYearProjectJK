import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';

const PaymentScreen = () => {
  const [shipping, setShipping] = useState([]);

  useEffect(() => {
    const fetchShipping = async () => {
      try {
        const { data } = await axios.get('/api/shipping');
        setShipping(data);
      } catch (error) {
        console.error('Error fetching shipping information:', error);
      }
    };
    fetchShipping();
  }, []);

  const history = useNavigate(); // for back button

  const goBackShipping = () => {
    // Use navigate function to go back to the shipping page
    history('/shipping'); // Replace '/shipping' with the actual route for your shipping page
  };

  return (
    <>
      <h1>Address Information</h1>
      {shipping.map((shippingInfo) => (
        <React.Fragment key={shippingInfo._id}>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{shippingInfo._id}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{shippingInfo.fullName}</td>
              </tr>
              <tr>
                <td>AddressLine1:</td>
                <td>{shippingInfo.addressLine1}</td>
              </tr>
              <tr>
                <td>AddressLine2:</td>
                <td>{shippingInfo.addressLine2}</td>
              </tr>
              <tr>
                <td>PostalCode:</td>
                <td>{shippingInfo.postalCode}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{shippingInfo.country}</td>
              </tr>
              <tr>
                <td>Actions:</td>
                <td>
                  <Link to={`/EditPaymentScreen/${shippingInfo._id}`}>
                    <Button variant="info">Edit</Button>
                  </Link>
                  {/* Add delete button if needed */}
                </td>
              </tr>
            </tbody>
          </Table>
        </React.Fragment>
      ))}

      {/* PayPal Section */}
      <div>
        <h2>PayPal</h2>
        <p></p>
        <a
          href="https://www.paypal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal Payment
        </a>
      </div>

      {/* Credit/Debit Card Section */}
      <div>
        <h2>Credit/Debit Card</h2>
        <Form>{/* Your credit/debit card form fields go here */}</Form>
      </div>
      <Button onClick={goBackShipping}>Back to Shipping</Button>
    </>
  );
};

export default PaymentScreen;
