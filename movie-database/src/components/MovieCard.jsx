import PropTypes from 'prop-types';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({poster_path, title, release_date}) => {
    return (
    <div className="card">
        <img src={getPosterURL(poster_path)} alt={title} />
        <div className="card">
            <h3>{title}</h3>
            <h3>{release_date}</h3>
        </div>
    </div>
    );
};

MovieCard.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
};

export default MovieCard;