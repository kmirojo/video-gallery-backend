import dotenv from "dotenv";
dotenv.config();

const {
    MONGO_DATABASE,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_HOST,
    PORT,
} = process.env;

export default {
    MONGO_DATABASE: MONGO_DATABASE || "video-gallery",
    MONGO_USER: MONGO_USER || "admin",
    MONGO_PASSWORD: MONGO_PASSWORD || "admin",
    MONGO_HOST: MONGO_HOST || "localhost",
    PORT: PORT || "3000",
};
