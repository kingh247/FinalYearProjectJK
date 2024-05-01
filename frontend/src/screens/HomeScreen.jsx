

/// this is usiing the Redux tool kit instead of axios and use effect getting stuff from database

import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }
  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.MyName.toLowerCase().includes(searchQuery.toLowerCase()) // searching through the products
  // );

  // Filter products based on search query and selected category
  const filteredProducts = products.filter(
    (product) =>
      product.MyName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === '' || product.MyBrand === selectedCategory)
  );

  // Extract unique brands from products
  const brands = [...new Set(products.map((product) => product.MyBrand))];
  return (
    <>
      <h1>My Products</h1>
      <Form.Group controlId="search">
        <Form.Label>Filter by Product:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Filter by Brand:</Form.Label>
        <Form.Control
          as="select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Row>
        {products &&
          filteredProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
