import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: '893edcd4856da8ebf72f55622559a408'
    },
})

