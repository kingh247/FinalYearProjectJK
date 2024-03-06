import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  test('renders About Us heading', () => {
    render(<AboutUs />);
    const heading = screen.getByRole('heading', { name: /about us/i });
    expect(heading).toBeInTheDocument();
  });
  test('renders Features component with Lorem Ipsum text', () => {
    render(<AboutUs />);

    expect(screen).toBeTruthy();
  });

  test('renders description paragraphs', () => {
    render(<AboutUs />);
    const paragraphs = screen.getAllByText(/lorem ipsum/i);
    expect(paragraphs.length).toBe(1);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<AboutUs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
