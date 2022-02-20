import mongoose from "mongoose";
import videoData from "../models/videoData.js";

export async function getVideos(req, res) {

    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = (page) * limit;
    try {
        const videos = await videoData.find();
        const Nvideos = videos.slice(startIndex, endIndex);
        res.status(200).json(Nvideos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createVideo = async (req, res) => {
    const { snippet, id } = req.body;
  
    const newVideo = new videoData({ title: snippet.title, imgUrl: snippet.thumbnails.high.url, videoId: id.videoId, publishedAt: Date.parse(snippet.publishedAt) / 1000 })

    try {
        await newVideo.save()

        res.status(201).json(newVideo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
