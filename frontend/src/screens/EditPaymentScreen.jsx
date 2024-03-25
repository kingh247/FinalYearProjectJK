import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditPaymentScreen = () => {
  const { id: shippingId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const history = useNavigate();

  useEffect(() => {
    const fetchShipping = async () => {
      try {
        const { data } = await axios.get(`/api/shipping/${shippingId}`);
        setFormData({
          fullName: data.fullName,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          city: data.city || '',
          postalCode: data.postalCode,
          country: data.country,
        });
      } catch (error) {
        console.error('Error fetching shipping:', error);
      }
    };

    fetchShipping();
  }, [shippingId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/shipping/${shippingId}`, formData);
      history('/payment');
    } catch (error) {
      console.error('Error updating shipping:', error);
    }
  };

  const goBackToAdminPage = () => {
    history('/payment');
  };

  return (
    <>
      <Link to="/productList" className="btn btn-light my-3">
        Go Back
      </Link>
      <h1>Edit Shipping</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="addressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address line 1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="addressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address line 2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Shipping
        </Button>
        <Button onClick={goBackToAdminPage}>Back to Payment</Button>
      </Form>
    </>
  );
};

export default EditPaymentScreen;
