import { db } from "../database/database.connection.js";
import { customersSchema } from "../schemas/customers.schema.js";

export const validateCustomers = async (req, res, next) => {
    const { name, phone, cpf, birthday } = req.body;
    const customersValidation = customersSchema.validate({ name, phone, cpf, birthday });

    if(customersValidation.error) {
        return res.status(400).send(customersValidation.error.message);
    }

    const cpfExists = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [cpf]);
    if(cpfExists.rows.length > 0) {
        return res.status(409).send("CPF já cadastrado.");
    }

    next();
};

export const validateCustomerById = async (req, res, next) => {
    const { id } = req.params;
    const { name, phone, cpf, birthday } = req.body;
    const customersValidation = customersSchema.validate({ name, phone, cpf, birthday });

    if(customersValidation.error) {
        return res.status(400).send(customersValidation.error.message);
    }

    const customerExistsNot = await db.query(`SELECT * FROM customers WHERE id = $1`, [id]);
    if(customerExistsNot.rows[0].length < 1) {
        return res.status(404).send("Não existe usuário com este id cadastrado.");
    }

    next();
};