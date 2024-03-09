import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const ShoppingCartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { items } = cart;

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Basket</h1>
        {items.length === 0 ? (
          <div>
            <h3>
              Your cart is empty. <Link to="/">Go back</Link>
            </h3>
          </div>
        ) : (
          <ListGroup variant="flush">
            {items.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={3}>
                    <Image
                      src={item.MyImage}
                      alt={item.MyName}
                      style={{ width: '200px', height: '200px' }} // Adjust the width and height as needed
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.MyName}</Link>
                  </Col>
                  <Col md={2}>
                    <Link>£{item.MyPrice}</Link>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => {}}
                    >
                      {[...Array(item.ProductCount).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light">
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup> // display the items in the cart
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup>
            <h2>Total ({items.reduce((ac, item) => ac + item.qty, 0)})items</h2>
            £
            {items
              .reduce((ac, item) => ac + item.MyPrice * item.qty, 0)
              .toFixed(2)}
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default ShoppingCartScreen;
