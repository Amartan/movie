import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import movieRouter from './routes/movie.routes'
import cors from "cors"
// const express = require("express");
// const dotenv = require("dotenv");

dotenv.config();
const url: string = process.env.MONGO_DB_URI || "";
mongoose.connect(url)
.then(()=>console.log("DB SUCCESS"))
.catch((err)=>console.log(err))

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api", movieRouter)

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http:localhost:${port}`);
});
