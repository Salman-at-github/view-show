import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('MyNavbar component', () => {
  it('renders the navbar with correct elements', () => {
    render(<Navbar />);

    // Check if the logo is rendered
    expect(screen.getByText(/ViewShow/i)).toBeInTheDocument();

    // Check if the "Home" link is rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Check if the search input is rendered
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();

    // Check if the "Search" button is rendered
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

});
