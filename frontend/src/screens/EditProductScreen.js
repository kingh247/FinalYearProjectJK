import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditProductScreen = () => {
  // Get the productId from the URL using useParams
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    MyName: '',
    MyPrice: 0,
    MyDescription: '',
  });
  const history = useNavigate(); // for back button

  useEffect(() => {
    // Fetch the details of the product for editing
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/product/${productId}`);
        setProduct(data);
        setFormData({
          MyName: data.MyName,
          MyPrice: data.MyPrice,
          MyDescription: data.MyDescription,
        });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    // Update the form data as the user types
    setFormData({
      // Using the spread operator (...) to create a shallow copy of the existing formData
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send an HTTP PUT request to update the product
      await axios.put(`/api/product/${productId}`, formData);
      // Redirect to the product list page after update
      history('/productList'); // Redirect to the product list page after update
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  const goBackToAdminPage = () => {
    // Use navigate function to go back to the admin page
    history('/productList'); // Replace '/admin-page' with the actual route for your admin page
  };

  return (
    <>
      <Link to="/productList" className="btn btn-light my-3">
        Go Back
      </Link>
      <h1>Edit Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="MyName"
            value={formData.MyName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            name="MyPrice"
            value={formData.MyPrice}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="count">
          <Form.Label>Count</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product count"
            name="ProductCount"
            value={formData.ProductCount}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter product description"
            name="MyDescription"
            value={formData.MyDescription}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Product
        </Button>
        {/* Add the back button */}
        <Button onClick={goBackToAdminPage}>Back to Product List</Button>
      </Form>
    </>
  );
};

export default EditProductScreen;
