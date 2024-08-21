import express from "express";
import http from 'http';
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
});

const app = express();

app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    credentials : true,
}));

app.use(compression())
app.use(cookieParser())


const server = http.createServer(app);


server.listen(process.env.PORT, () => {
    console.log(`Server running at : https://localhost:${process.env.PORT}/`);
});