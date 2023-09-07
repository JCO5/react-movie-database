import { useState } from 'react';
import '../styles/App.css';
import Popular from './Popular';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';

function App() {
  const [selectedOption, setSelectedOption] = useState('popular'); // Default to 'movieList'

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
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
      {selectedOption === 'popular' && <Popular />}
      {selectedOption === 'now-playing' && <NowPlaying />}
      {selectedOption === 'upcoming' && <Upcoming />}
      {selectedOption === 'top-rated' && <TopRated />}

    </>
  );
}

export default App;
