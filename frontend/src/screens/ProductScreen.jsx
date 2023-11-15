import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import products from '../products';
import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  ListGroup,
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import rating from '../components/rating';

// using hardcoded values from products.js array. then getting them here by there _id.
// will stry and chnage this for Admin to add products

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);
  // const { id: productId } = useParams();
  // const product = products.find((p) => p._id === productId);
  // console.log(product);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back{' '}
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong> £{product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              <strong>Description: </strong>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              {/* Using tenary operator to see if the product is in stock ur not and dipslying it here */}
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Status:</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In stock' : ' Out of stock'}
                    </strong>
                  </Col>
                </Row>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    {' '}
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
