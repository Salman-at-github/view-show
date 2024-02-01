import React from 'react';
import useShows from '../../hooks/useShows';
import Card from '../../components/card/Card';
import './Shows.css'
import { Link } from 'react-router-dom';

const Shows = () => {
    
  const { shows, loading, error } = useShows('https://api.tvmaze.com/search/shows?q=all');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='showsContainer'>
      {shows?.map((show,index) => (
        <Link to={`/shows/${show?.show.id}`} key={index}>
          <Card  show={show} />
        </Link>
      ))}
    </div>
  )
}

export default Shows