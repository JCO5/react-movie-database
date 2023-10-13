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
    <section className="card grid grid-cols-1 md:grid-cols-[1fr,420px] max-w-screen-lg !p-0 m-auto">
      {(single != undefined && single != null && single != '') && (
        <>
        <div className="group-relative relative">
          {single.poster_path ? (
            <img className="relative inline-block p-8" src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
          ) : (
            <img src="../src/image/filler-poster.svg" alt={single.title} />
          )}
          <button className="btn absolute top-8 right-0" onClick={() => toggleFavorites(single)}>
            {isFavorite ?  <svg className="w-20 top-4 right-12 h-auto absolute place-self-end fill-red-700 stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/>
                </svg> :
                <svg className="w-20 absolute top-4 right-12 h-auto fill-white stroke-black" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fillRule="nonzero"/>
                </svg> }
          </button>
        </div>
        <div className="p-8 text-left">
          <p className="bg-green-500 w-12 text-white rounded h-auto w-20 text-center text-5xl">{roundVoteAverage(single.vote_average)}</p>
          <h2 className="flex-auto text-6xl pt-4">{single.title}</h2>
          <p className='text-3xl py-4'>{formatDate(single.release_date)}</p>
          {/* Called the conditional here */}
          <p className="flex-none text-3xl">{single.overview}</p>
        </div>
        </>
      )}
    
  </section>
  );
};

export default Single;
