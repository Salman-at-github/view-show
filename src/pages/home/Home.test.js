import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home component', () => {
  it('renders the home page correctly', async () => {
    render(<Home />);

    // Check if the heading is rendered
    expect(screen.getByText(/Best Collection of Shows/i)).toBeInTheDocument();

    // Use waitFor to wait for the Shows component to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('shows-container')).toBeInTheDocument();
    });
  });
});
