import axios from 'axios';

const url = 'http://localhost:5000/videos';

export const fetchVideos = (page) => axios.get(`${url}?page=${page}&limit=9`);
export const createVideo = (newVideo) => axios.post(url, newVideo);