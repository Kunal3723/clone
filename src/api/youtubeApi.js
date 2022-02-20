import axios from "axios";
const KEY = "AIzaSyAVS1G9DQbQbgIGWhaAtflsjG8BrPrBbBY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 9,
        key: KEY
    },
    header:{}
})