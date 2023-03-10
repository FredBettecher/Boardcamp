import joi from "joi";
import date from "@joi/date";

const joiDate = joi.extend(date);

export const rentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    rentDate: joiDate.date().format('YYYY-MM-DD'),
    daysRented: joi.number().required(),
    returnDate: joi.number().allow(null),
    originalPrice: joi.number().required(),
    delayFee: joi.number().allow(null)
});