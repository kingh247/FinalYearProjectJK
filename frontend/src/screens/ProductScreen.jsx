// import React from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// // import products from '../products';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// import {
//   ListGroup,
//   Row,
//   Col,
//   Image,
//   Card,
//   Button,
//   ListGroupItem,
// } from 'react-bootstrap';
// import Rating from '../components/rating';

// // will stry and chnage this for Admin to add products

// const ProductScreen = () => {
//   const [product, setProduct] = useState({});
//   const { id: productId } = useParams();
//   const history = useNavigate();

//   useEffect(() => {
//     //this is getting the id from mongo
//     const fetchProduct = async () => {
//       try {
//         const { data } = await axios.get(`/api/product/${productId}`);
//         console.log('Fetched Product:', data);
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };
//     fetchProduct();
//   }, [productId]);

//   // useEffect(() => {
//   //   // fromt he server api product data
//   //   const fetchProduct = async () => {
//   //     const { data } = await axios.get(`/api/products/${productId}`);
//   //     setProduct(data);
//   //     console.log('Fetched Product:', data);
//   //   };
//   //   fetchProduct();
//   // }, [productId]);
//   // const { id: productId } = useParams();
//   // const product = products.find((p) => p._id === productId);
//   // console.log(product);

//   const addToCartHandler = () => {
//     //  add the product to the cart
//     // For now, let's just redirect to the CartScreen
//     history('/cart');
//   };
//   return (
//     <>
//       <Link className="btn btn-light my-3" to="/">
//         Go Back{' '}
//       </Link>
//       <Row>
//         <Col md={5}>
//           <Image src={product.MyImage} alt={product.MyName} fluid />
//         </Col>
//         <Col md={4}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h3>{product.MyName}</h3>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Rating
//                 value={product.MyRating}
//                 text={`${product.MyNumReviews} reviews`}
//               />
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <strong>Price:</strong> £{product.MyPrice}
//             </ListGroup.Item>
//             <ListGroup.Item>
//               {' '}
//               <strong>Description: </strong>
//               {product.MyDescription}
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={3}>
//           <Card>
//             <ListGroup variant="flush">
//               {/* Using tenary operator to see if the product is in stock ur not and dipslying it here */}
//               <ListGroup.Item>
//                 <Row>
//                   <Col>
//                     <strong>Status:</strong>
//                   </Col>
//                   <Col>
//                     <strong>
//                       {product.MyCountInStock > 0
//                         ? 'In stock'
//                         : ' Out of stock'}
//                     </strong>
//                   </Col>
//                 </Row>
//                 <ListGroup.Item>
//                   <Button
//                     className="btn-block"
//                     type="button"
//                     disabled={product.MyCountInStock === 0}
//                     onClick={addToCartHandler}
//                   >
//                     {' '}
//                     Add to Cart
//                   </Button>
//                 </ListGroup.Item>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default ProductScreen;

/// this is usiing the Redux tool kit instead of axios and use effect getting stuff from database

import React from 'react';
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import products from '../products';
import { useGetProductDetailsQuery } from '../slices/productApiSlice';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import {
  ListGroup,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/rating';

// will stry and chnage this for Admin to add products

const ProductScreen = () => {
  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook for navigating between routes

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductDetailsQuery(productId);

  const history = useNavigate();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products</p>;
  }

  const addToCartHandler = () => {
    dispatch(addItem({ ...product, qty }));
    history('/cart');
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back{' '}
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.MyImage} alt={product.MyName} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.MyName}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.MyRating}
                text={`${product.MyNumReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong> £{product.MyPrice}
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              <strong>Description: </strong>
              {product.MyDescription}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Price:</strong>
                  </Col>
                  <Col>
                    <strong>Price:</strong> £{product.MyPrice}
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* Using tenary operator to see if the product is in stock ur not and dipslying it here */}
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Status:</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product.ProductCount > 0 ? 'In stock' : ' Out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.ProductCount > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Qty:</strong>
                    </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.ProductCount).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.MyCountInStock === 0}
                  onClick={addToCartHandler}
                >
                  {' '}
                  Add to Cart
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* Button to navigate back to products or home screen */}
                <Button
                  type="button"
                  className="btn-block"
                  onClick={() => navigate('/')}
                >
                  Back to Products
                </Button>
              </ListGroup.Item>

              {/* </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
