"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const cors_1 = __importDefault(require("cors"));
// const express = require("express");
// const dotenv = require("dotenv");
dotenv_1.default.config();
const url = process.env.MONGO_DB_URI || "";
mongoose_1.default.connect(url)
    .then(() => console.log("DB SUCCESS"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", movie_routes_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http:localhost:${port}`);
});
