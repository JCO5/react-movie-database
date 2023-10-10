import axios from 'axios';

export const TMDB_API_KEY = '893edcd4856da8ebf72f55622559a408';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: TMDB_API_KEY
    },
})

