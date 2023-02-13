import { Router } from "express";
import { getRentals, postRentals, returnRental } from "../controllers/rentals.controller.js";
import { validateRentals, validateReturnRentals } from "../middlewares/rentals.middlewares.js";

export const rentalRoutes = Router();
rentalRoutes.get("/rentals", getRentals);
rentalRoutes.post("/rentals", validateRentals, postRentals);
rentalRoutes.post("/rentals/:id/return", validateReturnRentals, returnRental);
