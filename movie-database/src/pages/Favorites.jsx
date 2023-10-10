import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  
  return (
    <div>
      {favorites.length > 0 ? (
        <div className="card grid grid-cols-1 md:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="favorites" />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">No movies in your list! Add some!</h2>
      )}
    </div>
  )
}