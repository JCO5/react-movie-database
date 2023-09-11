import { useState } from 'react';
import '../styles/App.css';
import MovieList from './MovieList';
import MovieCarousel from './MovieCarousel';

function App() {
  const [selectedOption, setSelectedOption] = useState('popular'); // Default to 'popular'

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <MovieCarousel />
    
      <div className="card">
        {/* Radio buttons */}
        <div>
          <input
            type="radio"
            id="popularRadio"
            value="popular"
            checked={selectedOption === 'popular'}
            onChange={handleRadioChange}
          />
          <label htmlFor="popularRadio">Popular</label>
        </div>

        <div>
          <input
            type="radio"
            id="nowPlaying"
            value="now-playing"
            checked={selectedOption === 'now-playing'}
            onChange={handleRadioChange}
          />
          <label htmlFor="nowPlaying">Now Playing</label>
        </div>
        <div>
          <input
            type="radio"
            id="upcomingRadio"
            value="upcoming"
            checked={selectedOption === 'upcoming'}
            onChange={handleRadioChange}
          />
          <label htmlFor="upcomingRadio">Upcoming</label>
        </div>
        <div>
          <input
            type="radio"
            id="topRated"
            value="top-rated"
            checked={selectedOption === 'top-rated'}
            onChange={handleRadioChange}
          />
          <label htmlFor="topRated">Top Rated</label>
        </div>
      </div>

      {/* Conditional rendering of components */}
      {selectedOption === 'popular' && <MovieList category="popular" />}
      {selectedOption === 'now-playing' && <MovieList category="now_playing" />}
      {selectedOption === 'upcoming' && <MovieList category="upcoming" />}
      {selectedOption === 'top-rated' && <MovieList category="top_rated" />}
      
    </>
  );
}

export default App;
