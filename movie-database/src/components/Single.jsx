import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

const Single = () => {
const [single, setSingle] = useState([]);
let { id } = useParams(); // Get the movie ID from the URL

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = `movie/${id}`;
      const { data } = await tmdb.get(endpoint);

      setSingle(data);
    };

    fetchData();
  },[id]);

// Since the ratings were displaying two decimal digits, I created a conditional that rounds the rating to the nearest tenth 
  const roundVoteAverage = (voteAverage) => {
    if (Number.isInteger(voteAverage)) {
      return voteAverage.toString(); // If it's a whole number, convert to string without decimal
    } else {
      return voteAverage.toFixed(1); // If it has a decimal, round to one decimal place
    }
  };

  return (
    <div>
        {(single != undefined && single != null && single != '') &&
        <>
            <img src={`https://image.tmdb.org/t/p/original${single?.poster_path}`} alt={single.title} />
            <h2>{single.title}</h2>
            <p>{single.release_date}</p>
            {/* Called the conditional here */}
            <p>{roundVoteAverage(single.vote_average)}</p>
            <p>{single.overview}</p>
        </>
        }
    </div>
  );
};

export default Single;
