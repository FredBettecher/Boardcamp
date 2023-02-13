import { Router } from "express";
import { getCustomers, getCustomersById, postCustomers, putCustomers } from "../controllers/customers.controller.js";
import { validateCustomerById, validateCustomers } from "../middlewares/customers.middleware.js";

export const customersRoutes = Router();
customersRoutes.get("/customers", getCustomers);
customersRoutes.get("/customers/:id", getCustomersById);
customersRoutes.post("/customers", validateCustomers, postCustomers);
customersRoutes.put("/customers/:id", validateCustomerById, putCustomers);