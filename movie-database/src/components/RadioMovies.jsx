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
        <div className="card flex space-x-2 justify-evenly flex-wrap">
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
                    className={`py-4 px-8 rounded-full cursor-pointer transition duration-200 whitespace-nowrap ${
                    selectedOption === 'popular' ? 'bg-green-500 text-white' : 'bg-[#111827] hover:bg-green-500 text-white'
                    }`} htmlFor="popularRadio">Popular
                </label>
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
                    className={`py-4 px-8 rounded-full cursor-pointer transition duration-200 whitespace-nowrap ${
                    selectedOption === 'now-playing' ? 'bg-green-500 text-white' : 'bg-[#111827] hover:bg-green-500 text-white'
                    }`} htmlFor="nowPlaying">Now Playing
                </label>
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
                    className={`py-4 px-8 rounded-full cursor-pointer transition duration-200 whitespace-nowrap ${
                    selectedOption === 'upcoming' ? 'bg-green-500 text-white' : 'bg-[#111827] hover:bg-green-500 text-white'
                    }`} htmlFor="upcomingRadio">Upcoming
                </label>
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
                    className={`py-4 px-8 rounded-full cursor-pointer transition duration-200 whitespace-nowrap ${
                    selectedOption === 'top-rated' ? 'bg-green-500 text-white' : 'bg-[#111827] hover:bg-green-500 text-white'
                    }`} htmlFor="topRated">Top Rated
                </label>
            </div>
        </div>

        {selectedOption === 'popular' && <MovieList category="popular" />}
        {selectedOption === 'now-playing' && <MovieList category="now_playing" />}
        {selectedOption === 'upcoming' && <MovieList category="upcoming" />}
        {selectedOption === 'top-rated' && <MovieList category="top_rated" />}
        </>
    );
}

export default RadioMovies;
