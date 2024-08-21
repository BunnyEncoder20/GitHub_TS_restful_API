import express from "express";
import http from 'http';
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(cors({
    // origin:process.env.CORS_ORIGIN,
    credentials : true,
}));

app.use(compression())
app.use(cookieParser())


const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server running at : https://localhost:${PORT}/`);
});