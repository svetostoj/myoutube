import axios from 'axios';

const KEY = 'AIzaSyCCut3apM6CwpipUFyeX0CgFIscXOVqMb4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});