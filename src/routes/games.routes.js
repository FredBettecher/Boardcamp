import { Router } from "express";
import { getGames, postGames } from "../controllers/games.controller.js";

export const gamesRoutes = Router();
gamesRoutes.get("/games", getGames);
gamesRoutes.post("/games", postGames);
