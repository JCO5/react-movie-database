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
    <div className="grid-cols-2 group-relative">
      {(single != undefined && single != null && single != '') && (
        <>
          {single.poster_path ? (
            <img className="col-start-1 col-span-1" src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
          ) : (
            <div className='filler-poster'></div>
          )}
          <button className="btn" onClick={() => toggleFavorites(single)}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites' }
          </button>
          <h2 className="flex-auto">{single.title}</h2>
          <p>{formatDate(single.release_date)}</p>
          {/* Called the conditional here */}
          <p className="flex-auto">{roundVoteAverage(single.vote_average)}</p>
          <p className="flex-none">{single.overview}</p>
        </>
      )}
    </div>
  </section>
  );
};

export default Single;
