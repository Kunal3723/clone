import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    videoId: String,
    imgUrl: String,
    createdAt: {
        type: Date,
        default: +new Date,
    },
    publishedAt: String,
})


const videoData = mongoose.model("videoData", postSchema);

export default videoData;