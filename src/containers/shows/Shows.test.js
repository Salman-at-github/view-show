import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Shows from './Shows';
import useShows from '../../hooks/useShows';

jest.mock('../../hooks/useShows'); // Mock the useShows hook

describe('Shows component', () => {
  it('renders loading state correctly', async () => {
    // Mock loading state
    useShows.mockReturnValue({ shows: null, loading: true, error: null });

    render(
      <Router>
        <Shows />
      </Router>
    );

    // Check if the loading message is rendered
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Ensure that shows are not rendered during loading
    await waitFor(() => {
      expect(screen.queryByTestId('card')).not.toBeInTheDocument();
    });
  });

  it('renders error state correctly', async () => {
    // Mock error state
    useShows.mockReturnValue({ shows: null, loading: false, error: 'Some error occurred' });

    render(
      <Router>
        <Shows />
      </Router>
    );

    // Check if the error message is rendered
    expect(screen.getByText(/Error: Some error occurred/i)).toBeInTheDocument();

    // Ensure that shows are not rendered during error
    await waitFor(() => {
      expect(screen.queryByTestId('card')).not.toBeInTheDocument();
    });
  });

  it('renders shows correctly', async () => {
    // Mock shows
    const fakeData = [
        {
            "score": 0.7024896,
            "show": {
              "id": 42181,
              "url": "https://www.tvmaze.com/shows/42181/all-rise",
              "name": "All Rise",
              "type": "Scripted",
              "language": "English",
              "genres": [
                "Drama",
                "Legal"
              ],
              "status": "Ended",
              "runtime": 60,
              "averageRuntime": 60,
              "premiered": "2019-09-23",
              "ended": "2023-11-18",
              "officialSite": "https://www.oprah.com/sp/all-rise.html",
              "schedule": {
                "time": "21:00",
                "days": [
                  "Saturday"
                ]
              },
              "rating": {
                "average": 6.7
              },
              "weight": 95,
              "network": {
                "id": 236,
                "name": "Oprah Winfrey Network",
                "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
                },
                "officialSite": null
              },
              "webChannel": null,
              "dvdCountry": null,
              "externals": {
                "tvrage": null,
                "thetvdb": 363841,
                "imdb": "tt10329042"
              },
              "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg"
              },
              "summary": "<p><b>All Rise</b> is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who doesn't intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be.</p>",
              "updated": 1700686554,
              "_links": {
                "self": {
                  "href": "https://api.tvmaze.com/shows/42181"
                },
                "previousepisode": {
                  "href": "https://api.tvmaze.com/episodes/2320801"
                }
              }
            }
          },
          {
            "score": 0.7018503,
            "show": {
              "id": 34653,
              "url": "https://www.tvmaze.com/shows/34653/all-american",
              "name": "All American",
              "type": "Scripted",
              "language": "English",
              "genres": [
                "Drama",
                "Sports"
              ],
              "status": "Running",
              "runtime": 60,
              "averageRuntime": 60,
              "premiered": "2018-10-10",
              "ended": null,
              "officialSite": "http://www.cwtv.com/shows/all-american/",
              "schedule": {
                "time": "20:00",
                "days": [
                  "Monday"
                ]
              },
              "rating": {
                "average": 6.1
              },
              "weight": 94,
              "network": {
                "id": 5,
                "name": "The CW",
                "country": {
                  "name": "United States",
                  "code": "US",
                  "timezone": "America/New_York"
                },
                "officialSite": "https://www.cwtv.com/"
              },
              "webChannel": null,
              "dvdCountry": null,
              "externals": {
                "tvrage": null,
                "thetvdb": 348200,
                "imdb": "tt7414406"
              },
              "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
              },
              "summary": "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
              "updated": 1689588083,
              "_links": {
                "self": {
                  "href": "https://api.tvmaze.com/shows/34653"
                },
                "previousepisode": {
                  "href": "https://api.tvmaze.com/episodes/2530954"
                }
              }
            }
          },
    ];
    useShows.mockReturnValue({ shows: fakeData, loading: false, error: null });

    render(
      <Router>
        <Shows />
      </Router>
    );

    // Check if each show card is rendered
    await waitFor(() => {
      expect(screen.getByText(/All Rise/i)).toBeInTheDocument();
      expect(screen.getByText(/All American/i)).toBeInTheDocument();
    });
  });
});
