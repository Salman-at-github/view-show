import React from "react";
import "./Card.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatDate } from "../../utils/formatDate";

const Card = ({ show }) => {
  const rating = show.show.rating.average;

  // Calculate the percentage of the rating out of 10
  const ratingPercentage = (rating / 10) * 100; // 360 degrees in a circle

  return (
    <div className="card">
      <img src={show.show?.image?.original} alt="Img" className="showImage"/>
      <div className="cardHeading">
      <h2>{show.show.name}</h2>
      <p>{formatDate(show.show.premiered)}</p>
      </div>
      {/* <p id="status">Status: {show.show.status}</p> */}
      <p id="language">Language: {show.show.language}</p>

      <div className="genres">
        {show.show.genres.map((genre, index) => {
          return (
            <div key={index} className="genre">
              <span>{genre}</span>
            </div>
          );
        })}
      </div>
      {/* Circular progress bar with rating inside */}
      {
        <div className="progressBar">
          <CircularProgressbar
            value={show.show.rating.average * 10}
            maxValue={100}
            text={`${show.show.rating.average || 'NA'}`}
            strokeWidth={10}
            background
            styles={buildStyles({
              textSize: '32px',
              pathColor: `${
                show.show.rating.average >= 7
                  ? 'rgba(7, 148, 0)'
                  : show.show.rating.average >= 6
                  ? 'rgba(254, 225, 0)'
                  : 'red'
              }`,
              textColor: 'black',
              trailColor: 'white',
              backgroundColor: 'white',
            })}
          />
        </div>
      }
    </div>
  );
};

export default Card;
