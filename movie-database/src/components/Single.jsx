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
    <section className="card grid grid-cols-1 md:grid-cols-2 !p-0">

      {(single != undefined && single != null && single != '') && (
        <>
        <div className="group-relative">
          {single.poster_path ? (
            <img className="relative inline-block p-8" src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
          ) : (
            <img src="../src/image/filler-poster.svg" alt={single.title} />
          )}
          <button className="btn" onClick={() => toggleFavorites(single)}>
            {isFavorite ?  <svg className="w-14 h-auto absolute top-28 fill-red-700 stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/>
                </svg> :
                <svg className="w-14 h-auto absolute top-28 fill-white stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/>
                </svg> }
          </button>
        </div>
        <div className="md:col-start-2">
          <h2 className="flex-auto">{single.title}</h2>
          <p>{formatDate(single.release_date)}</p>
          {/* Called the conditional here */}
          <p className="absolute top-32 left-4 bg-green-500 w-12 text-white rounded">{roundVoteAverage(single.vote_average)}</p>
          <p className="flex-none">{single.overview}</p>
        </div>
        </>
      )}
    
  </section>
  );
};

export default Single;
