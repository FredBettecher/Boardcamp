import { db } from "../database/database.connection.js";
import { rentalSchema } from "../schemas/rentals.schemas.js";
import dayjs from "dayjs";

export const validateRentals = async (req, res, next) => {
    const { customerId, gameId, daysRented, returnDate = null, delayFee = null } = req.body;
    const customerExists = await db.query(`SELECT * FROM customers WHERE id = $1`, [customerId]);
    const selectedGame = await db.query(`SELECT * FROM games WHERE id = $1`, [gameId]);
    const rentDate = dayjs(Date.now()).format('YYYY-MM-DD');
    const originalPrice = selectedGame.rows[0].pricePerDay * daysRented;
    const rentalsValidation = rentalSchema.validate({ customerId, gameId, daysRented, rentDate, originalPrice });
    
    if(rentalsValidation.error) {
        return res.status(400).send(rentalsValidation.error.message);
    }

    if(customerExists.rows.length < 1) {
        return res.status(400).send("Id do cliente não encontrado.");
    }

    if(selectedGame.rows.length < 1) {
        return res.status(400).send("Id do jogo não encontrado.");
    }

    if(returnDate !== null || delayFee !== null) {
        return res.status(400).send("returnDate and delayFee não podem estar preenchidos.");
    }

    const currentGameStock = selectedGame.rows[0].stockTotal;
    const rentedGameCount = await db.query(`SELECT COUNT(*) FROM rentals WHERE "gameId" = $1 AND "returnDate" IS NULL`, [gameId]);
    if(currentGameStock - rentedGameCount.rows[0].count > daysRented) {
        return res.status(400).send(`Não há estoque suficiente do jogo selecionado.`);
    }

    next(); 
};