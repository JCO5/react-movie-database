import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import MovieCard from './MovieCard';


const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [movieIndex, setMovieIndex]=useState(12);
  const [loadedMovies, loadMoreMovies]=useState(20);
  const [page,nextPage]=useState(1);
  const [increaseIndex, setIncrease]=useState(8); //set state to 8 for first load more. 12 initialized and load 8 to complete page 1

  
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';

      if (category === 'popular') {
        endpoint = 'movie/popular';
      } else if (category === 'now_playing') {
        endpoint = 'movie/now_playing';
      } else if (category === 'upcoming') {
        endpoint = 'movie/upcoming';
      } else if (category === 'top_rated') {
        endpoint = 'movie/top_rated';
      }
      // console.log('start movieIndex: '+movieIndex);
      // console.log('start loaded movies: '+loadedMovies);
      

      if(movieIndex>=20){
        // basis of this code is that each page of movies in the api holds 20 movies. page 1 is loaded first and all 20 movies are loaded but index restricts it to show only the first 12. the load more button then presents the other 8 and then going forward, the load more button will now load and present the next 20 movies from the next page.
        setIncrease(20);
        // console.log('loading more movies');
        
        // console.log('movies have been loaded');
        const newpage = page+1; //local var so we don't update state because state won't update on time
        nextPage(newpage); // update const
        let pageNumber = '?page='+newpage; // concatenate newpage on pageNumber
        const { data } = await tmdb.get(endpoint+pageNumber); //concatenate strings
        // console.log(movieIndex);
        const newMovies = [...movies,...data.results.slice(0,movieIndex)]; //slice loads movies but return code below can choose not to present all of it
        
        console.log('movieIndex: '+movieIndex);
        console.log(newMovies);
        console.log('movieslength: '+movies?.length);
        console.log('loaded movies: '+loadedMovies);
        setMovies(newMovies);

      }else{
        // console.log('else trigger');
        const { data } = await tmdb.get(endpoint);
        setMovies(data?.results?.slice(0, loadedMovies));
        
      }
    };

    fetchData();
  }, [category, movieIndex]);
  //made category and movieIndex dependencies so those values update the site without reloading
  
  return (
    <div>
    <div className="card grid grid-cols-1 md:grid-cols-4 pt-0">
      {movies?.map((movie, index) => {
        return index<movieIndex && <MovieCard key={index} {...movie} />;
      })}
      
    </div>
      <button
        className="bg-[#111827] hover:bg-green-500 text-white py-4 px-8 rounded-full cursor-pointer transition duration-200 mb-10"
        onClick={() => {
          // console.log('hello');
          setMovieIndex(movieIndex + increaseIndex); 
          loadMoreMovies(loadedMovies+20); 
        }
      }
      >
        Load More...
      </button>

    </div>
    
  );
}; //end of const MovieList


export default MovieList
