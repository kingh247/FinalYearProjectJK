import React from 'react';
import { render, screen } from '@testing-library/react';
import ShippingScreen from '../ShippingScreen';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('renders shipping form', () => {
  render(<ShippingScreen />);

  expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
  expect(screen.getByLabelText('Address Line 1:')).toBeInTheDocument();
  expect(screen.getByLabelText('Address Line 2:')).toBeInTheDocument();
  expect(screen.getByLabelText('City:')).toBeInTheDocument();
  expect(screen.getByLabelText('Postal Code:')).toBeInTheDocument();
  expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  expect(screen.getByText('Continue to payment')).toBeInTheDocument();

  // Check that there is only one instance of the button element with the text "Add Shipping"
  const addShippingButton = screen.getByRole('button', {
    name: 'Add Shipping',
  });
  expect(addShippingButton).toBeInTheDocument();
  expect(addShippingButton.tagName).toBe('BUTTON');
});
