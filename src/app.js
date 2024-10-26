import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

dotenv.config({
    path: "./.env",
  });

const app = express();
const PORT = 5000;



app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    
}))


app.use(express.json({
    limit: "20kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "20kb"
}))

app.use(express.static("public"))

app.use(cookieParser())











app.listen(PORT, () => {
    console.log(`Server running on port (src/app.js) ${PORT}`);
    
})

export default app