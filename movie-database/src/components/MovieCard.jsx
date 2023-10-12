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

const roundVoteAverage = (voteAverage) => {
    if (Number.isInteger(voteAverage)) {
      return voteAverage.toString(); // If it's a whole number, convert to string without decimal
    } else {
      return parseFloat(voteAverage).toFixed(1); // If it has a decimal, round to one decimal place
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
                {isFavorite ? <svg className="w-14 h-auto absolute right-4 top-4 fill-red-700 stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/></svg> : <svg className="w-14 h-auto absolute right-4 top-4 fill-white stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/></svg> }
            </button>
            <div className="card-info absolute bg-black/20 flex -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className='text-base'>{movie.overview}</h3>
            </div>
            <div>
                <h3 className="absolute top-5 left-4 bg-blue-500 w-12 text-white rounded">{movie.vote_average ? roundVoteAverage(movie.vote_average) : "-"}</h3>
                <h3>{movie.title}</h3>
                <h3>{movie.release_date ? formatDate(movie.release_date) : "No release date"}</h3>
            </div>
        </div>
    </section>

    );
};

export default MovieCard;