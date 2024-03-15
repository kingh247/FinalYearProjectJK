import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Table, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { removeItem } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

const PaymentScreen = () => {
  const [shipping, setShipping] = useState([]);
  const cart = useSelector((state) => state.cart);
  const { items } = cart;
  const dispatch = useDispatch();

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
  const handleDelete = async (shippingId) => {
    try {
      await axios.delete(`/api/shipping/${shippingId}`);
      // Update the local state to reflect the deletion
      setShipping((prevShipping) =>
        prevShipping.filter((shipping) => shipping._id !== shippingId)
      );
    } catch (error) {
      console.error('Error deleting shipping:', error);
    }
  };

  const totalPrice = items
    .reduce((ac, item) => ac + item.MyPrice * item.qty, 0)
    .toFixed(2);
  const deliveryCharge = Number(totalPrice * 0.1).toFixed(2);

  const goBackShipping = () => {
    // Use navigate function to go back to the shipping page
    history('/cart'); // Replace '/shipping' with the actual route for your shipping page
  };
  const removeCartHandler = async (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <h1>Order Information</h1>
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
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(shippingInfo._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>

            {/* <Table>
            <tbody>
            <tr>
              <td>Total Price:</td>
              <td>{`${totalPrice}`}</td>
            </tr>
            </tbody>
            </Table> */}
          </Table>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>Products:</td>
                <td>
                  {items.map((item) => (
                    <Row key={item._id} className="align-items-center">
                      <Col md={2}>
                        <Image
                          src={item.MyImage}
                          alt={item.MyName}
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item._id}`}>{item.MyName}</Link>
                      </Col>
                      <Col md={2}>£{item.MyPrice}</Col>
                      <Col>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeCartHandler(item._id)}
                        >
                          <FaTrash style={{ color: 'red' }} />
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </td>
              </tr>
              <tr>
                <td>Delivery Charge:</td>
                <td>{deliveryCharge}</td>
              </tr>
              <tr>
                <td>Total Price:</td>
                <td>{`${totalPrice}`}</td>
              </tr>
            </tbody>
          </Table>
        </React.Fragment>
      ))}

      {/* PayPal Section */}
      <div>
        <h2>PayPal</h2>
        <PayPalScriptProvider>
          <PayPalButtons>
            createOrder=
            {(data, actions) => {
              // This function sets up the details of the transaction
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalPrice, // The total amount to be paid
                      currency_code: 'Sterling', // Change to your currency code
                    },
                  },
                ],
              });
            }}
            onApprove=
            {(data, actions) => {
              // This function captures the funds from the transaction
              return actions.order.capture().then(function (details) {
                // Call your backend to save the transaction details
                // Redirect or display a success message to the user
              });
            }}
            onError=
            {(err) => {
              // Handle errors here
              console.error(err);
            }}
          </PayPalButtons>
        </PayPalScriptProvider>
      </div>

      <Button onClick={goBackShipping}>Back to Basket</Button>
    </>
  );
};

export default PaymentScreen;
