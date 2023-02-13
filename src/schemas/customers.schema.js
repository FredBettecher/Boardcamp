import joi from "joi";

export const customersSchema = joi.object({
    name: joi.string().required(),
    phone: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    cpf: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    birthday: joi.date().format('YYYY-MM-DD')
});