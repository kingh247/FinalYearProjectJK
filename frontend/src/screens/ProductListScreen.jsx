import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
   

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/product');
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

   const history = useNavigate();// for back button

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/product/${productId}`);
      // Update the local state to reflect the deletion
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const goBackToAdminPage = () => {
    // Use navigate function to go back to the admin page
    history('/admin'); // Replace '/admin-page' with the actual route for your admin page
  };

  return (
    <>
      <h1>Product List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.MyName}</td>
              <td>{product.MyPrice}</td>
              <td>{product.ProductCount}</td>
              <td>{product.MyDescription}</td>
              <td>
                <Link to={`/EditProductScreen/${product._id}`}>
                  <Button variant="info">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={goBackToAdminPage}>Back to Admin Page</Button>
    </>
  );
};

export default ProductListScreen;
