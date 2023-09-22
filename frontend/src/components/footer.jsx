import { Col, Row, Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  // java script date object
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Row>
            <div className="footer-content">
              <div className="footer-section">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="footer-section">
                <h2>Contact Us</h2>
                <p>Email: Johnkingh@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </div>
              <div className="footer-section">
                <h2>Follow Us</h2>
                <div className="social-icons">
                  <a href="https://www.facebook.com">Facebook</a>
                  <a href="https://www.twitter.com">Twitter</a>
                  <a href="https://www.instagram.com">Instagram</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2023 John kingh E-comerce site. All rights reserved.</p>
            </div>
            <Col className="text-center py-3">
              <p>JohnKinghEcommerceSite &copy; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
