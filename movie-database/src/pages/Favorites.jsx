import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  
  return (
    <div>
      <h1 className='heading pt-16'>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className="card grid grid-cols-1 md:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="favorites" />
          ))}
        </div>
      ) : (
        <div className='h-screen'>
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        </div>
      )}
    </div>
  )
}