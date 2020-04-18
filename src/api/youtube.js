import axios from 'axios';

const KEY = 'AIzaSyArNCYYDKxmWb8Fl4KWz778G1_kbVuqdcI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: "video",
        key: KEY
    }
});