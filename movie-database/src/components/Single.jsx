import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import { GlobalContext } from '../context/GlobalState';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Single = () => {
  const [single, setSingle] = useState([]);
  let { id } = useParams(); // Get the movie ID from the URL

  const { addMovieToFavorites, removeMovieFromFavorites, favorites } = useContext(GlobalContext);

  // Use the same logic as in MovieCard.jsx to determine if the movie is a favorite
  let isFavorite = favorites.find((favMovie) => favMovie.id === single.id);
  const toggleFavorites = !isFavorite ? addMovieToFavorites : removeMovieFromFavorites;

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = `movie/${id}`;
      const { data } = await tmdb.get(endpoint);

      setSingle(data);
    };

    fetchData();
  }, [id]);

  // Since the ratings were displaying two decimal digits, I created a conditional that rounds the rating to the nearest tenth 
  const roundVoteAverage = (voteAverage) => {
    if (Number.isInteger(voteAverage)) {
      return voteAverage.toString(); // If it's a whole number, convert to string without decimal
    } else {
      return voteAverage.toFixed(1); // If it has a decimal, round to one decimal place
    }
  };

  return (
    <section className="card">
      <div grid-cols-2 className="group-relative">
        {(single != undefined && single != null && single != '') && (
          <>
          {single.poster_path ? (
            <img className="col-start-1 col-span-1" src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
          ) : (
            <div className='filler-poster'></div>
          )}
              <button className="btn" onClick={() => toggleFavorites(single)}>
                {isFavorite ? <svg className="add-heart-single" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> : <svg className="remove-heart-single" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg> }
              </button>
<<<<<<< HEAD
            <h2>{single.title}</h2>
            <p>{formatDate(single.release_date)}</p>
            {/* Called the conditional here */}
            <h3>{roundVoteAverage(single.vote_average)}</h3>
            <p>{single.overview}</p>
=======
            </div>
            <h2 className="flex-auto">{single.title}</h2>
            <p>{formatDate(single.release_date)}</p>
            {/* Called the conditional here */}
            <p className="flex-auto">{roundVoteAverage(single.vote_average)}</p>
            <p className="flex-none">{single.overview}</p>
>>>>>>> 1479a9aac75d82f50a693e58d3272f44a3c2e75e
          </>
        )}
      </div>
    </section>
  );
};

export default Single;
