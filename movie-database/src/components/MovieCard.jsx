import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/original/${posterpath}`
};

const MovieCard = ( movie ) => {
    const { addMovieToFavorites, removeMovieFromFavorites, favorites } = useContext(GlobalContext);

    if (movie.movie) {
        movie = movie.movie;
    }

    let isFavorite = favorites.find(o => o.id === movie.id);
    const toggleFavorites = !isFavorite ? addMovieToFavorites : removeMovieFromFavorites;
    
    return (
    <div className="card">
        <Link to={`/single/${movie.id}`}>
        <img src={getPosterURL(movie.poster_path)} alt={movie.title} /> 
        </Link>
        <div className="btn">
        <button className="btn" onClick={() => toggleFavorites( movie )}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
        <div className="card-info">
        </div>
            <h3>{movie.vote_average}</h3>
            <h3>{movie.title}</h3>
            <h3>{movie.release_date ? movie.release_date : "-"}</h3>
            <h3>{movie.overview}</h3>
    </div>
    );
};

export default MovieCard;