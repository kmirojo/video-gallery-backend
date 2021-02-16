import { Router } from "express";
import {
    createVideo,
    deleteVideo,
    getVideo,
    getVideos,
    updateVideo,
} from "../controllers/videos.controller";

const router = Router();

router.get("/", getVideos);

router.get("/:id", getVideo);

router.post("/", createVideo);

router.delete("/:id", deleteVideo);

router.put("/:id", updateVideo);

export default router;
