import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card component', () => {
  const sampleShow = {
    show: {
      name: 'Sample Show',
      premiered: '2022-01-01',
      language: 'English',
      genres: ['Drama', 'Action'],
      rating: { average: 8.5 },
      image: {
        original: 'https://example.com/sample-image.jpg',
      },
    },
  };

  it('renders with the correct data', () => {
    render(<Card show={sampleShow} />);

    // Check if the show name is rendered
    expect(screen.getByText(/Sample Show/i)).toBeInTheDocument();


    // Check if the language is rendered
    expect(screen.getByText(/English/i)).toBeInTheDocument();

    // Check if genres are rendered
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText(/Action/i)).toBeInTheDocument();

    // Check if the rating is rendered
    expect(screen.getByText(/8.5/i)).toBeInTheDocument();

    // Check if the image is rendered
    const image = screen.getByAltText(/Img/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/sample-image.jpg');
  });
});
