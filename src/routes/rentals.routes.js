import { Router } from "express";
import { getRentals, postRentals } from "../controllers/rentals.controller.js";
import { validateRentals } from "../middlewares/rentals.middlewares.js";

export const rentalRoutes = Router();
rentalRoutes.get("/rentals", getRentals);
rentalRoutes.post("/rentals", validateRentals, postRentals);
