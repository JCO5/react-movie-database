import {useEffect, useState} from 'react';
import tmdb from '../api/tmdb';
import MovieCard from './MovieCard';

const Upcoming = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
      const fetchMovies = async() => {
        const {data} = await tmdb.get('movie/upcoming')
        setMovies(data.results.slice(0, 12))
      };

      fetchMovies();
    },[]);

    return ( 
    <div className="card">
        {movies.map((movie,index)=>{
            return <MovieCard key={index} {...movie} />
        })}
    </div>
    );
};

export default Upcoming;