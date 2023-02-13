import joi from "joi";
import date from "@joi/date";

const joiDate = joi.extend(date);

export const customersSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().min(10).max(11).pattern(/^[0-9]+$/).required(),
    cpf: joi.string().length(11).pattern(/^[0-9]+$/).required(),
    birthday: joiDate.date().format('YYYY-MM-DD')
});