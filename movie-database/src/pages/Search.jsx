import React, {useState} from 'react';
import {TMDB_API_KEY} from '../api/tmdb';
import MovieCard from '../components/MovieCard'

export const Search = () => {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

  const onChange = e => {
    e.preventDefault();
    
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json()).then(data => {
      setResults(!data.errors ? data.results : []);
    });
  };

  return (
    <div>
      <input type='text' 
      placeholder='Search for a movie'
      className='search-text'
      value={query}
      onChange={onChange}/>

      {results.length > 0 && (
        <div className="card grid grid-cols-1 md:grid-cols-4">
          {results.map(movie => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Search