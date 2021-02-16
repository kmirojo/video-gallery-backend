import { RequestHandler } from "express";
import Video from "../models/Video";

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();

        res.json({
            status: true,
            videos,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            msg: "Get Videos Error",
            error,
        });
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const videoFound = await Video.findById(id);

        res.json({
            status: true,
            video: videoFound,
        });
    } catch (error) {
        const { kind } = error;

        if (kind === "ObjectId") {
            return res.status(404).json({
                status: false,
                msg: "No video found",
                id: req.params.id,
            });
        }

        res.status(500).json({
            status: false,
            msg: "Get Video Error",
            error,
        });
    }
};

export const createVideo: RequestHandler = async (req, res) => {
    try {
        const video = new Video(req.body);
        const savedVideo = await video.save();

        res.json({
            status: true,
            msg: "Video Created",
            video: savedVideo,
        });
    } catch (error) {
        const { url } = error.keyValue;

        // If video already exists
        if (url) {
            return res.status(301).json({
                status: false,
                msg: "The URL already exists",
                url,
            });
        }

        res.status(500).json({
            status: false,
            msg: "Create Video Error",
            error,
        });
    }
};

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const videoFound = await Video.findByIdAndDelete(id);

        res.json({
            status: true,
            video: videoFound,
        });
    } catch (error) {
        const { kind } = error;

        if (kind === "ObjectId") {
            return res.status(404).json({
                status: false,
                msg: "No video found",
                id: req.params.id,
            });
        }

        res.status(500).json({
            status: false,
            msg: "Delete Video Error",
            error,
        });
    }
};

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const videoUpdated = await Video.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        res.json({
            status: true,
            video: videoUpdated,
        });
    } catch (error) {
        const { kind } = error;

        if (kind === "ObjectId") {
            return res.status(404).json({
                status: false,
                msg: "No video found",
                id: req.params.id,
            });
        }

        res.status(500).json({
            status: false,
            msg: "Update Video Error",
            error,
        });
    }
};
