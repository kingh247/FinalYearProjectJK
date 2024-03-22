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
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
// find the path to assets/styles/index.css
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import AdminPage from './screens/Adminpage';
import EditProductScreen from './screens/EditProductScreen';
import UserListScreen from './screens/UserListScreen';
import EditUserScreen from './screens/EditUserScreen';
import AdminDashboard from './screens/AdminDashboard';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import EditPaymentScreen from './screens/EditPaymentScreen';
import ConfirmationPage from './screens/ConfirmationPage';
// added this and then ran it in below and removed the <App />
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/productlist" element={<ProductListScreen />} />
      <Route path="/EditProductScreen/:id" element={<EditProductScreen />} />
      <Route path="/EditUserScreen/:id" element={<EditUserScreen />} />
      <Route path="/UserListScreen" element={<UserListScreen />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/product" element={<AdminPage />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signUp" element={<SignUpScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/EditPaymentScreen/:id" element={<EditPaymentScreen />} />
    </Route>
  )
);
//removed <App /> and placed in the   <RouterProvider router={router} />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

