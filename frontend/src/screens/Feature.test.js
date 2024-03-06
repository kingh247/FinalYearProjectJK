import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './Features';

test('renders Features component with Lorem Ipsum text', () => {
  render(<Features />);

  expect(screen).toBeTruthy();
});

describe('Features', () => {
  test('renders Features heading', () => {
    render(<Features />);
    const heading = screen.getByRole('heading', { name: /Features/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders features paragraph', () => {
    render(<Features />);
    const paragraph = screen.getByText(/Lorem ipsum/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Features />);
    expect(asFragment()).toMatchSnapshot();
  });
});
