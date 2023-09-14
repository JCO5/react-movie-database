import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';

      if (category === 'popular') {
        endpoint = 'movie/popular';
      } else if (category === 'now_playing') {
        endpoint = 'movie/now_playing';
      } else if (category === 'upcoming') {
        endpoint = 'movie/upcoming';
      } else if (category === 'top_rated') {
        endpoint = 'movie/top_rated';
      }
      const { data } = await tmdb.get(endpoint);
      setMovies(data.results.slice(0, 12));
    };

    fetchData();
  },[category]);

  
  return (
    <div className="card grid grid-cols-1 md:grid-cols-3">
      {movies.map((movie, index) => {
        return <MovieCard key={index} {...movie} />;
      })}
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string,
};

export default MovieList;
