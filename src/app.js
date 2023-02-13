import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { gamesRoutes } from "./routes/games.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(gamesRoutes);

app.listen(process.env.PORT, () => console.log("App running on port: ", process.env.PORT));