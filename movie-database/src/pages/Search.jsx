import React, { useState } from 'react';
import { TMDB_API_KEY } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import RadioMovies from '../components/RadioMovies';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(!data.errors ? data.results : []);
      });
  };

  return (
    <div>
      <p className='heading mt-16'>What do you want to watch?</p>
      <input
            type="search"
            placeholder="Search for a movie"
            className= "search-text border-2 border-gray-300 bg-white text-black h-10 px-5 pr-15 rounded-full text-2xl focus:outline-none mt-16 p-8"
            value={query}
            onChange={onChange}
          />
      {results.length > 0 ? (
        <div className="card grid grid-cols-1 md:grid-cols-4 pt-none">
          {results.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <RadioMovies className="mt-16"/>
        </div>
      )}
    </div>
  );
};

export default Search;
