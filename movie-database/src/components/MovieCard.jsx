import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/original/${posterpath}`
};

const MovieCard = ({poster_path, vote_average, title, release_date, overview, id}) => {
    return (
    <div className="card">
        <Link to={`single/${id}`}>
        <img src={getPosterURL(poster_path)} alt={title} />
        </Link>
        <div className="card-info">
            <h3>{vote_average}</h3>
            <h3>{title}</h3>
            <h3>{release_date}</h3>
            <h3>{overview}</h3>
        </div>
    </div>
    );
};

MovieCard.propTypes = {
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number,
};

export default MovieCard;

