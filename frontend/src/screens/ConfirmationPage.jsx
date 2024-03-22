import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ConfirmationScreen = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <h1 className="text-center mb-4">Thank you for your purchase!</h1>
              <p>Your order has been successfully placed.</p>
              <p>
                An email confirmation has been sent to your registered email
                address with details of your order.
              </p>
              <p>
                If you have any questions or concerns regarding your order, feel
                free to contact our customer support team at{' '}
                <a href="mailto:support@example.com">support@example.com</a>.
              </p>
              <p>
                <Link to="/" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationScreen;
