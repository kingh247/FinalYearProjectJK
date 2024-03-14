import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addItem, removeItem } from '../slices/cartSlice';
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

  const addToCartHandler = async (product, qty) => {
    dispatch(addItem({ ...product, qty }));
  };
  const removeCartHandler = async (id) => {
    dispatch(removeItem(id));
  };
  // const checkoutHandler = async (id) => {
  //   navigate('/login?redirect=shipping');
  // };
  //  const checkoutHandler = async (id) => {
  //    navigate('/shipping');
  //  };
  
   const checkoutHandler = async () => {
     const totalPrice = items
       .reduce((ac, item) => ac + item.MyPrice * item.qty, 0)
       .toFixed(2);

     navigate(`/shipping?total=${totalPrice}`);
   };

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
                <Row className="align-items-center">
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
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.ProductCount).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeCartHandler(item._id)}
                    >
                      <FaTrash style={{ color: 'red' }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Total ({items.reduce((ac, item) => ac + item.qty, 0)}) items
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>
                £
                {items
                  .reduce((ac, item) => ac + item.MyPrice * item.qty, 0)
                  .toFixed(2)}
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                classname="btn-block"
                disabaled={items.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default ShoppingCartScreen;
