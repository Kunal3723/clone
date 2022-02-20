import express from "express";
import { createVideo, getVideos } from "../controllers/videos.js";
const router = express.Router();


router.get("/", getVideos)
router.post("/", createVideo)

export default router;