import { db } from "../database/database.connection.js";
import dayjs from "dayjs";

export const getRentals = async (req, res) => {
    try {
        const rentals = await db.query(`SELECT * FROM rentals
        INNER JOIN customers ON rentals."customerId" = customers.id INNER JOIN games ON rentals."gameId" = games.id`);
        res.send(rentals.rows);

    } catch(err) {
        return res.status(500).send(err.message);
    }
}

export const postRentals = async (req, res) => {
    const { customerId, gameId, daysRented } = req.body;
    const rentDate = dayjs(Date.now()).format('YYYY-MM-DD');
    const selectedGame = await db.query(`SELECT * FROM games WHERE id = $1`, [gameId]);
    const originalPrice = selectedGame.rows[0].pricePerDay * daysRented;
    
    try {
        const addRent = await db.query(`INSERT INTO rentals ("customerId", "gameId", "daysRented", "rentDate", "originalPrice") VALUES ($1, $2, $3, $4, $5)`, [customerId, gameId, daysRented, rentDate, originalPrice]);
        res.sendStatus(201);

    } catch(err) {
        return res.status(500).send(err.message);
    }
}