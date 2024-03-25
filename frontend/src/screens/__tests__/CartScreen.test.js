import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import ShoppingCartScreen from '../CartScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Define initial items
const myItems = [
  { id: '1', name: 'Product 1', price: 10, quantity: 1 },
  { id: '2', name: 'Product 2', price: 20, quantity: 2 },
  // Add more items as needed
];

// Mock the Redux store
const mockStore = configureStore([]);
const store = mockStore({
  cart: {
    items: [myItems], // Mock initial items here if needed
  },
});

describe('ShoppingCartScreen', () => {
  test('renders shopping cart screen correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          {' '}
          {/* Wrap the ShoppingCartScreen component with BrowserRouter */}
          <ShoppingCartScreen />
        </Router>
      </Provider>
    );

    // Write your test assertions here
  });
});
