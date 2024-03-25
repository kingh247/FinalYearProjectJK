import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpScreen from '../SignUpScreen';
import axios from 'axios';

describe('SignUpScreen', () => {
  test('renders sign-up form', () => {
    render(<SignUpScreen />);

    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });

  test('submits sign-up form with user input', async () => {
    // Mock successful sign-up response
    const mockSignUpResponse = {
      status: 200,
      data: {
        message: 'User successfully signed up.',
      },
    };

    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockSignUpResponse);

    render(<SignUpScreen />);

    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    // Simulate user input
    await userEvent.type(nameInput, 'Test User');
    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'testpassword');

    // Simulate form submission
    await userEvent.click(submitButton);

    // Wait for the asynchronous behavior to settle
    await waitFor(() => {
      // Assert axios.post was called once
      expect(axios.post).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      // Assert axios.post was called with expected args
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:5000/api/signup',
        {
          username: 'Test User',
          email: 'test@example.com',
          password: 'testpassword',
          userType: 'User',
        }
      );
    });

    // Any other assertions
  });
});
