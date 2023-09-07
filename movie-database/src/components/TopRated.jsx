import {useEffect, useState} from 'react';
import tmdb from '../api/tmdb';
import MovieCard from './MovieCard';

const TopRated = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
      const fetchMovies = async() => {
        const {data} = await tmdb.get('movie/top_rated')
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

export default TopRated;