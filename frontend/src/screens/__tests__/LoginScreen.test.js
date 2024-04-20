import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginScreen from '../LoginScreen';
import mockData from '../../../../backend/mockData/getMock';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

describe('LoginScreen', () => {
  test('renders login form', () => {
    render(
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
describe('LoginScreens', () => {
  test('handles successful login', async () => {
    render(
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    );

    // Simulate user input
    userEvent.type(screen.getByLabelText('Username:'), mockData[0].username);
    userEvent.type(screen.getByLabelText('Password:'), 'password123');

    // Simulate form submission
    userEvent.click(screen.getByRole('button', { name: 'Login' }));

    // Wait for the asynchronous behavior to settle
    await waitFor(() => {
      // Assertions based on the expected behavior after a successful login

      expect(window.location.href).toBe('http://localhost/');
    });
  });

  test('navigates to user page on successful User login', async () => {
    // Mock successful login response
    const mockLoginResponse = {
      status: 200,
      data: {
        userType: 'User',
      },
    };

    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockLoginResponse);

    render(
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(usernameInput, 'User');
    await userEvent.type(passwordInput, 'Userpass');
    await userEvent.click(submitButton);

    expect(window.location.href).toBe('http://localhost/');
  });
  test('navigates to user page on successful admin login', async () => {
    // Mock successful login response
    const mockLoginResponse = {
      status: 200,
      data: {
        userType: 'Admin',
      },
    };

    jest.spyOn(axios, 'post').mockResolvedValueOnce(mockLoginResponse);

    render(
      <BrowserRouter>
        <LoginScreen />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    await userEvent.type(usernameInput, 'Admin');
    await userEvent.type(passwordInput, 'Adminpass');
    await userEvent.click(submitButton);

    expect(window.location.href).toBe('http://localhost/');
  });
});
