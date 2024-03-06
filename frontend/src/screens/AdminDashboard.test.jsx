import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

describe('AdminDashboard', () => {
  test('renders welcome heading', () => {
    render(<AdminDashboard />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('heading', { name: /welcome to admin dashboard/i })
    ).toBeInTheDocument();
  });

  test('renders manage products button', () => {
    render(<AdminDashboard />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('button', { name: /manage products/i })
    ).toBeInTheDocument();
  });

  test('renders view product list button', () => {
    render(<AdminDashboard />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('button', { name: /view product list/i })
    ).toBeInTheDocument();
  });

  test('renders view user list button', () => {
    render(<AdminDashboard />, { wrapper: MemoryRouter });
    expect(
      screen.getByRole('button', { name: /view user list/i })
    ).toBeInTheDocument();
  });
});
