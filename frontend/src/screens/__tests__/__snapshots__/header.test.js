import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux'; // Import Provider
import Header from '../../../components/header';
import store from '../../../store'; // Import your Redux store

describe('Header', () => {
  test('renders header content correctly', () => {
    render(
      <Provider store={store}>
        {' '}
        {/* Wrap the Header component with Provider */}
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    // Check if the logo is rendered
    expect(
      screen.getByAltText('John Kingh Ecommerce Site')
    ).toBeInTheDocument();

    // Check if the navigation links are rendered
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });
});
