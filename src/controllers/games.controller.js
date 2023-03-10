import { db } from "../database/database.connection.js";

export const getGames = async (req, res) => {
    try {
        const games = await db.query("SELECT * FROM games");
        res.send(games.rows);

    } catch(err) {
        return res.status(500).send(err.message);
    }
};

export const postGames = async (req, res) => {
    const { name, image, stockTotal, pricePerDay } = req.body;

    try {
        const addGame = await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);
        res.sendStatus(201);

    } catch(err) {
        return res.status(500).send(err.message);
    }
    
};