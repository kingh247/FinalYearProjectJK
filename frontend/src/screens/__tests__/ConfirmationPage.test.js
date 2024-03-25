import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmationScreen from '../ConfirmationPage';

describe('ConfirmationScreen', () => {
  test('renders confirmation screen content correctly', () => {
    render(
      <Router>
        {' '}
        {/* Wrap the ConfirmationScreen component with BrowserRouter */}
        <ConfirmationScreen />
      </Router>
    );
    // Check if the main heading is rendered
    expect(
      screen.getByText('Thank you for your purchase!')
    ).toBeInTheDocument();

    // Check if the paragraphs with confirmation messages are rendered
    expect(
      screen.getByText('Your order has been successfully placed.')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'An email confirmation has been sent to your registered email address with details of your order.'
      )
    ).toBeInTheDocument();
   
  });
});
