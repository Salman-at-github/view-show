import React from 'react';
import Shows from "../../containers/shows/Shows";
import './Home.css';

const Home = () => {
  return (
    <div className="home" data-testid="shows-container">
      <h1>Best Collection of Shows</h1>
      <Shows />
    </div>
  );
};

export default Home;
