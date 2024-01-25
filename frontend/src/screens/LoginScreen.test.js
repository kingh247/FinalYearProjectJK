import { render, screen } from '@testing-library/react';
import LoginScreen from './LoginScreen.jsx';
import React from 'react';

test('Username is required', () => {
  render(<LoginScreen />);
  const usernameInput = screen.getByLabelText('');
  expect(usernameInput).toBeInTheDocument();
});

test('Password is required', () => {
  render(<LoginScreen />);
  const passwordInput = screen.getByLabelText('');
  expect(passwordInput).toBeInTheDocument();
});

test('Button is rendered', () => {
  render(<LoginScreen />);
  const button = screen.getByRole('');
  expect(button).toBeInTheDocument();
});
