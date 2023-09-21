import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import { GlobalContext } from '../context/GlobalState';

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
    <div>
      {(single != undefined && single != null && single != '') && (
        <>
          <img src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
          <div className="btn">
            <button className="btn" onClick={() => toggleFavorites(single)}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          <h2>{single.title}</h2>
          <p>{single.release_date}</p>
          {/* Called the conditional here */}
          <p>{roundVoteAverage(single.vote_average)}</p>
          <p>{single.overview}</p>
        </>
      )}
    </div>
  );
};

export default Single;
