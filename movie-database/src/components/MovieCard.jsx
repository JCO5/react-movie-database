import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/original/${posterpath}`
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const MovieCard = ( movie ) => {
    const { addMovieToFavorites, removeMovieFromFavorites, favorites } = useContext(GlobalContext);

    if (movie.movie) {
        movie = movie.movie;
    }

    let isFavorite = favorites.find(o => o.id === movie.id);
    const toggleFavorites = !isFavorite ? addMovieToFavorites : removeMovieFromFavorites;
    
    return (
    <section className="card">
        <div className='group relative'>
            <Link to={`/single/${movie.id}`}>
                {movie.poster_path ? (
                <img src={getPosterURL(movie.poster_path)} alt={movie.title} /> 
                ) : (
                    <div className='filler-poster'></div>
                )}
            </Link>    
            <button className="btn" onClick={() => toggleFavorites( movie )}>
                {isFavorite ? <svg className="w-12 h-auto absolute right-4 top-4 fill-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> : <svg className="w-12 h-auto absolute right-4 top-4 fill-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg> }
            </button>
            <div className="card-info absolute bg-black/20 flex -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className='text-base'>{movie.overview}</h3>
            </div>
            <div>
                <h3 className="absolute top-4 left-4 bg-blue-500 p-2 text-white rounded">{movie.vote_average ? movie.vote_average : "No ratings"}</h3>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date ? formatDate(movie.release_date) : "-"}</h3>
            </div>
        </div>
    </section>

    );
};

export default MovieCard;