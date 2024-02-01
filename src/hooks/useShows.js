import { useState, useEffect } from 'react';

const useShows = (query) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(query);
        const data = await response.json();
        setShows(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error?.message);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { shows, loading, error };
};

export default useShows;
