import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  // State to hold the products data fetched from the server
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products data from the server
    const fetchProducts = async () => {
      // const { data } = await axios.get('/api/products'); // test data in backend products.js
      const { data } = await axios.get('/api/product'); // data coming from mongodb
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1> My Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={16} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
