import { Router } from "express";
import { getGames, postGames } from "../controllers/games.controller.js";
import { validateGame } from "../middlewares/games.middleware.js";

export const gamesRoutes = Router();
gamesRoutes.get("/games", getGames);
gamesRoutes.post("/games", validateGame, postGames);
