import axios from 'axios';

const KEY = 'AIzaSyCLJZRWNZObsAdi_ukJkHtqQ9dvWA_7dEc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})