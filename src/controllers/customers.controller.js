import { db } from "../database/database.connection.js";

export const getCustomers = async (req, res) => {
    try {
        const customers = await db.query(`SELECT * FROM customers`);
        res.send(customers.rows);

    } catch(err) {
        return res.status(500).send(err.message);
    }
};

export const getCustomersById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const customersById = await db.query(`SELECT * FROM customers WHERE id = $1`, [id]);
        if(customersById.rows.length < 1) {
            return res.status(404).send("Não existe usuário com este id cadastrado.");
        }

        res.send(customersById.rows[0]);

    } catch(err) {
        return res.status(500).send(err.message);
    }
};

export const postCustomers = async (req, res) => {
    const { name, phone, cpf, birthday } = req.body;

    try {
        const addCustomer = await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`, [name, phone, cpf, birthday]);
        return res.sendStatus(201);

    } catch(err) {
        res.status(500).send(err.message);
        return;
    }

};

export const putCustomers = async (req, res) => {
    const { id } = req.params;
    const { name, phone, cpf, birthday } = req.body;

    try {
        const updateCustomer = await db.query(`UPDATE customers SET name = $1, phone = $2, cpf = $3, birthday = $4 WHERE id = $5`, [name, phone, cpf, birthday, id]);
        res.sendStatus(200);

    } catch(err) {
        return res.status(500).send(err.message);
    }
};