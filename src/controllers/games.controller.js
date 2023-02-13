import { db } from "../database/database.connection.js";
import { gameSchema } from "../schemas/games.schema.js";

export const getGames = async (req, res) => {
    try {
        const games = await db.query("SELECT * FROM games");
        res.send(games.rows);

    } catch(err) {
        return res.status(500).send(err.message);
    }
}

export const postGames = async (req, res) => {
    const { name, image, stockTotal, pricePerDay } = req.body;
    const gameValidation = gameSchema.validate({ name, image, stockTotal, pricePerDay });
    

    try {
        if(gameValidation.error) {
            res.status(400).send(gameValidation.error.message);
            return;
        }
        
        const nameExists = await db.query(`SELECT * FROM games WHERE name = $1`, [name]);
        if(nameExists.rows.length > 0) {
            res.status(409).send("Nome do jogo já cadastrado.");
            return;
        }

        if(stockTotal < 1 || pricePerDay < 1) {
            res.status(400).send("Os valores de estoque e preço devem ser maiores que zero.");
            return;
        }

        const addGame = await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay]);
        res.sendStatus(201);

    } catch(err) {
        res.status(500).send(err.message);
        return;
    }
    
}