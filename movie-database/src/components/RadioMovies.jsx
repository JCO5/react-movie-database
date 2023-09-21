import { useState } from 'react';
import '../styles/App.css';
import MovieList from './MovieList';

function RadioMovies() {
    const [selectedOption, setSelectedOption] = useState('popular'); // Default to 'popular'

    // Function to handle radio button change
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <>
        <div className="card flex space-x-2 justify-center ">
            {/* Radio buttons */}
            <div className="radio-button relative">
            <input
                className='hidden'
                type="radio"
                id="popularRadio"
                value="popular"
                checked={selectedOption === 'popular'}
                onChange={handleRadioChange}
            />
            <label 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-200"
                htmlFor="popularRadio">Popular</label>
            </div>

            <div className='radio-button relative'>
            <input
                className='hidden'
                type="radio"
                id="nowPlaying"
                value="now-playing"
                checked={selectedOption === 'now-playing'}
                onChange={handleRadioChange}
            />
            <label 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-200"
                htmlFor="nowPlaying">Now Playing</label>
            </div>
            <div className="radio-button relative">
            <input
                className='hidden'
                type="radio"
                id="upcomingRadio"
                value="upcoming"
                checked={selectedOption === 'upcoming'}
                onChange={handleRadioChange}
            />
            <label 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-200"
                htmlFor="upcomingRadio">Upcoming</label>
            </div>
            <div className='radio-button relative'>
            <input
                className='hidden'
                type="radio"
                id="topRated"
                value="top-rated"
                checked={selectedOption === 'top-rated'}
                onChange={handleRadioChange}
            />
            <label 
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full cursor-pointer transition duration-200"
                htmlFor="topRated">Top Rated</label>
            </div>
        </div>  

    {selectedOption === 'popular' && <MovieList category="popular" />}
    {selectedOption === 'now-playing' && <MovieList category="now_playing" />}
    {selectedOption === 'upcoming' && <MovieList category="upcoming" />}
    {selectedOption === 'top-rated' && <MovieList category="top_rated" />}
    </>
    );

}

export default RadioMovies 
