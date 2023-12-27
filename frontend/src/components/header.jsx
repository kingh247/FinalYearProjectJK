import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaFlipboard, FaInfo } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href>
              <img src={logo} alt="John Kingh Ecommerce Site" />
              John Kingh Ecommerce Site
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/AboutUs">
                <Nav.Link>
                  <FaInfo />
                  About Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/features">
                <Nav.Link>
                  <FaFlipboard />
                  Features
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser />
                  Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/product">
                <Nav.Link>
                  <FaUser />
                  Admin
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
