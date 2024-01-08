import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutUs from './screens/AboutUs';
import Features from './screens/Features';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// find the path to assets/styles/index.css
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import AdminPage from './screens/Adminpage';
// added this and then ran it in below and removed the <App />
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/product" element={<AdminPage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="/cart" element={<CartScreen />} />
    </Route>
  )
);
//removed <App /> and placed in the   <RouterProvider router={router} />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
