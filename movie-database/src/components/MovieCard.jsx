import PropTypes from 'prop-types';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/original/${posterpath}`
}

const MovieCard = ({poster_path, vote_average, title, release_date}) => {
    return (
    <div className="card">
        <img src={getPosterURL(poster_path)} alt={title} />
        <div className="card-info">
            <h3>{vote_average}</h3>
            <h3>{title}</h3>
            <h3>{release_date}</h3>
        </div>
    </div>
    );
};

MovieCard.propTypes = {
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
};

export default MovieCard;