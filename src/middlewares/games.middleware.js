import { db } from "../database/database.connection.js";
import { gameSchema } from "../schemas/games.schema.js";

export const validateGame = async (req, res, next) => {
    const { name, image, stockTotal, pricePerDay } = req.body;
    const gameValidation = gameSchema.validate({ name, image, stockTotal, pricePerDay });
  
    if (gameValidation.error) {
      return res.status(400).send(gameValidation.error.message);
    }
  
    const nameExists = await db.query(`SELECT * FROM games WHERE name = $1`, [name]);
    if (nameExists.rows.length > 0) {
      return res.status(409).send("Nome do jogo já cadastrado.");
    }
  
    if (stockTotal < 1 || pricePerDay < 1) {
      return res.status(400).send("Os valores de estoque e preço devem ser maiores que zero.");
    }
  
    next();
  };