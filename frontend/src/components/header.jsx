import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaFlipboard, FaInfo } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
  const { items } = useSelector((state) => state.cart); // calling this from store.js
  console.log(items); //displaying the items that are in the cart

  // Retrieve user data from local storage using tenary operators
  const userData = JSON.parse(localStorage.getItem('userData'));
  const loggedInUsername = userData ? userData.username : null;
  const userType = userData ? userData.userType : null;
  // Logout function

  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem('userData');
    // empty the cart data stoed in local storage
    localStorage.removeItem('cart');
    // Redirect to the login page or any other page
    window.location.href = '/login'; 
  };

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
                  <FaShoppingCart /> Cart
                  {items.length > 0 && (
                    <Badge pill bg="danger">
                      {items.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {loggedInUsername ? (
                <>
                  {userType === 'Admin' && (
                    <LinkContainer to="/admin">
                      <Nav.Link>
                        <FaUser />
                        Admin
                      </Nav.Link>
                    </LinkContainer>
                  )}
                  <Nav.Link onClick={handleLogout} style={{ color: 'green' }}>
                    <FaUser />
                    {loggedInUsername} (Logout )
                  </Nav.Link>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUser />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
