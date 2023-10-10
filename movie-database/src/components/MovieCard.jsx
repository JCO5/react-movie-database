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

// Since the ratings were displaying two decimal digits, I created a conditional that rounds the rating to the nearest tenth 
const roundVoteAverage = (voteAverage) => {
if (Number.isInteger(voteAverage)) {
    return voteAverage.toString(); // If it's a whole number, convert to string without decimal
} else {
    return voteAverage.toFixed(1); // If it has a decimal, round to one decimal place
}
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
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <div className="card-info absolute bg-black/20 flex -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className='text-base'>{movie.overview}</h3>
            </div>
            <div>
                <h3>{movie.vote_average ? roundVoteAverage(movie.vote_average) : "No ratings"}</h3>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date ? formatDate(movie.release_date) : "-"}</h3>
            </div>
        </div>
    </section>

    );
};

export default MovieCard;