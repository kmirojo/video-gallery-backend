import mongoose from "mongoose";
import config from "./config/config";

async function databaseConnection() {
    try {
        const options: mongoose.ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASSWORD,
        };
        const db = await mongoose.connect(
            `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,
            options
        );
        console.log("Database is connected to:", db.connection.name);
    } catch (error) {
        console.log("=== DB-ERROR ======================");
        console.log(error);
        console.log("===================================");
    }
}

databaseConnection();
