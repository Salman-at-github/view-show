import React from 'react';
import { useParams } from 'react-router-dom';
import useShows from '../../hooks/useShows';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaClock, FaCalendarAlt, FaLink } from 'react-icons/fa';
import './ShowDetail.css'; // Import the CSS file

const ShowDetail = () => {
  const { id } = useParams();
  const queryUrl = `https://api.tvmaze.com/shows/${id}`;
  const { shows, loading, error } = useShows(queryUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="show-detail">
      <div className="image-container">
        <div className="show-image">
        <img  src={shows.image.original} alt={shows.name} className="show-image"/>
          <div className="progress-bar">
            <CircularProgressbar
              value={shows.rating.average * 10}
              maxValue={100}
              text={`${shows.rating.average || 'NA'}`}
              strokeWidth={10}
              background
              styles={buildStyles({
                textSize: '20px',
                pathColor: `${
                  shows.rating.average >= 7
                    ? 'rgba(7, 148, 0)'
                    : shows.rating.average >= 6
                    ? 'rgba(254, 225, 0)'
                    : 'red'
                }`,
                textColor: 'black',
                trailColor: 'white',
                backgroundColor: 'white',
              })}
            />
          </div>
          <div className="genres">
            {shows.genres.map((genre, index) => (
              <div key={index} className="genre">
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="card-heading">
          <h2>{shows.name}</h2>
          <p className="premiered">
            <FaCalendarAlt /> {shows.premiered}
          </p>
        </div>
        <p className="summary" dangerouslySetInnerHTML={{ __html: shows.summary }} />

        <div className="details">
          <div className="info-group">
            <p id="type">
              <strong>Type:</strong> {shows.type}
            </p>
            <p id="status">
              <strong>Status:</strong> {shows.status}
            </p>
          </div>
          <div className="info-group">
            <p id="language">
              <strong>Language:</strong> {shows.language}
            </p>
            <p>
              <FaClock /> {shows.runtime} mins
            </p>
          </div>
          <div className="info-group">
            <strong>Official Site:</strong>{' '}
            <a href={shows.officialSite} target="_blank" rel="noopener noreferrer">
              <FaLink /> Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
