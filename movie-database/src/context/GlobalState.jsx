import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    favorites: localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state]);

  // Since the ratings were displaying two decimal digits, I created a conditional that rounds the rating to the nearest tenth 
  const roundVoteAverage = (voteAverage) => {
    if (Number.isInteger(voteAverage)) {
      return voteAverage.toString(); // If it's a whole number, convert to string without decimal
    } else {
      return voteAverage.toFixed(1); // If it has a decimal, round to one decimal place
    }
  };

const addMovieToFavorites = (movie) => {
    const roundedVoteAverage = roundVoteAverage(movie.vote_average);
    const movieWithRoundedVote = { ...movie, vote_average: roundedVoteAverage };
    dispatch({ type: 'ADD_MOVIE_TO_FAVORITES', payload: movieWithRoundedVote });
};

const removeMovieFromFavorites = (movie) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_FAVORITES', payload: movie.id });
  };

    return (
        <GlobalContext.Provider value={{ favorites: state.favorites, addMovieToFavorites, removeMovieFromFavorites}}>
            {props.children}
        </GlobalContext.Provider>
    );

}

