import joi, { string } from "joi";

export const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    rentDate: joi.date().format('YYYY-MM-DD'),
    daysRented: joi.number().required(),
    returnDate: joi.number().optional(),
    originalPrice: joi.number().required(),
    delayFee: joi.number().optional()
});