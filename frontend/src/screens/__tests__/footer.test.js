import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/footer';

describe('Footer', () => {
  test('renders footer content correctly', () => {
    render(<Footer />);

    // Check if "About Us" section is rendered
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    ).toBeInTheDocument();

    // Check if "Contact Us" section is rendered
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(
      screen.getByText('Email: Johnkingh@example.com')
    ).toBeInTheDocument();
    expect(screen.getByText('Phone: +1 (123) 456-7890')).toBeInTheDocument();

    // Check if "Follow Us" section is rendered
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();

    // Check if "Footer Bottom" section is rendered
    expect(
      screen.getByText(/John kingh E-comerce site. All rights reserved./i)
    ).toBeInTheDocument();

    // Check if "Col" component with current year is rendered
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`JohnKinghEcommerceSite © ${currentYear}`)
    ).toBeInTheDocument();
  });
});
