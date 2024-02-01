import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowDetail from './ShowDetail';

import useShows from '../../hooks/useShows';

jest.mock('../../hooks/useShows'); // Mock the useShows hook

describe('ShowDetail component', () => {
  it('renders loading state correctly', async () => {
    // Mock loading state
    useShows.mockReturnValue({ shows: null, loading: true, error: null });

    render(
      <Router>
        <Routes>

        <Routes path="/shows/:id" element={<ShowDetail />}>
        </Routes>
        </Routes>
      </Router>
    );

    // Check if the loading message is rendered
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Ensure that details are not rendered during loading
    await waitFor(() => {
      expect(screen.queryByText(/Type:/i)).not.toBeInTheDocument();
    });
  });

  it('renders error state correctly', async () => {
    // Mock error state
    useShows.mockReturnValue({ shows: null, loading: false, error: 'Some error occurred' });

    render(
      <Router>
        <Route path="/shows/:id" element={<ShowDetail />}>
        </Route>
      </Router>
    );

    // Check if the error message is rendered
    expect(screen.getByText(/Error: Some error occurred/i)).toBeInTheDocument();

    // Ensure that details are not rendered during error
    await waitFor(() => {
      expect(screen.queryByText(/Type:/i)).not.toBeInTheDocument();
    });
  });

  it('renders show details correctly', async () => {
    // Mock show details
    const mockShow = {
      id: 1,
      name: 'Show 1',
      premiered: '2022-01-01',
      summary: '<p>This is a show summary.</p>',
      type: 'Drama',
      status: 'Running',
      language: 'English',
      runtime: 60,
      officialSite: 'https://example.com',
      image: { original: 'https://example.com/image.jpg' },
      rating: { average: 8.5 },
      genres: ['Action', 'Adventure'],
    };
    useShows.mockReturnValue({ shows: mockShow, loading: false, error: null });

    render(
      <Router>
        <Route path="/shows/:id" element={<ShowDetail />}>
          
        </Route>
      </Router>
    );

    // Check if each detail is rendered
    await waitFor(() => {
      expect(screen.getByText(/Show 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Type:/i)).toBeInTheDocument();
      expect(screen.getByText(/Running/i)).toBeInTheDocument();
      expect(screen.getByText(/English/i)).toBeInTheDocument();
      expect(screen.getByText(/60 mins/i)).toBeInTheDocument();
      expect(screen.getByText(/Visit Site/i)).toHaveAttribute('href', 'https://example.com');
    });
  });
});
