import axios from 'axios';

export const TMDB_API_KEY = '893edcd4856da8ebf72f55622559a408';
export const BASE_URL = 'https://api.themoviedb.org/3';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: TMDB_API_KEY
    },
})

