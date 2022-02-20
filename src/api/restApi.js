import axios from 'axios';

//for local
//const url = 'http://localhost:5000/videos';

const url = 'https://youtube-fetch.herokuapp.com/videos';

export const fetchVideos = (page) => axios.get(`${url}?page=${page}&limit=9`);
export const createVideo = (newVideo) => axios.post(url, newVideo);
