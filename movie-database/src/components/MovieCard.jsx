import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const getPosterURL = (posterpath)=>{
    return `https://www.themoviedb.org/t/p/original/${posterpath}`
};

const MovieCard = ({poster_path, vote_average, title, release_date, overview, id}) => {
    return (
    <section className="card">
        <div className='group relative'>
            <Link to={`single/${id}`}>
            <img src={getPosterURL(poster_path)} alt={title} />
            </Link>
            <div className="card-info absolute bg-black/20 flex -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className='text-base'>{overview}</h3>
            </div>
            <div>
                <h3>{vote_average}</h3>
                <h3>{title}</h3>
                <h3>{release_date}</h3>
            </div>
        </div>
    </section>
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

