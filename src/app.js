import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { gamesRoutes } from "./routes/games.routes.js";
import { customersRoutes } from "./routes/customers.routes.js";
import { rentalRoutes } from "./routes/rentals.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(gamesRoutes, customersRoutes, rentalRoutes);

app.listen(process.env.PORT, () => console.log("App running on port:", process.env.PORT));