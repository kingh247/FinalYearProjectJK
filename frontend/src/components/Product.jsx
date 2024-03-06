import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img
          src={product.MyImage} 
          variant="top"
          style={{ objectFit: 'cover', width: '100%', height: '200px' }} //set all images the same size
        />
      </a>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.MyName}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.MyRating}
            text={`${product.MyNumReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">£{product.MyPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
