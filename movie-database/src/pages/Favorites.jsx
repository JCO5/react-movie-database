import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);
  
  return (
    <div>
      <h1 className='heading pt-16 mb-32'>Your Favorites ({favorites.length}) </h1>
      {favorites.length > 0 ? (
        <div className="card grid grid-cols-1 sg:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-16">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="favorites" />
          ))}
        </div>
      ) : (
        <div className='h-screen'>
          <h2 className="no-movies">There are no movies in your list!</h2>
          <Link class="text-green-500 hover:text-blue-500 transition-colors" to = "/#">Add Some!</Link>
        </div>
      )}
    </div>
  )
}