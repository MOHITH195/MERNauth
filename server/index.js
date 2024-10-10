
import express from "express";
import env from "dotenv";
import cors from "cors";
import authcontroller from "./routes/authRoute.js";

import mongoose from "mongoose";
import db from "./Connection/dbconnection.js";
import cookieParser from "cookie-parser";

db();

const app = express();

app.use(express.json());
env.config();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/',authcontroller)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
