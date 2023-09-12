// import {useEffect, useState} from 'react';
// import tmdb from '../api/tmdb';
// import MovieCard from './MovieCard';

// const MovieCarousel = () => {
//     const [movies, setMovies] = useState([])

//     useEffect(() => {
//       const fetchMovies = async() => {
//         const {data} = await tmdb.get('movie/popular')
//         setMovies(data.results.slice(0, 6))
//       };

//       fetchMovies();
//     },[]);

//     return ( 
//     <div className="card">
//         {movies.map((movie,index)=>{
//             return <MovieCard key={index} {...movie} />
//         })}
//     </div>
//     );
// };

// export default MovieCarousel;

import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const getPosterURL = (posterpath)=>{
  return `https://www.themoviedb.org/t/p/original/${posterpath}`
}

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get('movie/now_playing');
      setMovies(data.results.slice(0, 7));
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Now Playing</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        initialSlide={3}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <img src={getPosterURL(movie.poster_path)} alt={movie.title} />
          </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default MovieCarousel;