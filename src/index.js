import express from "express";
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const app = express();
const port = 3000;

const pool = createPool({
    host: process.env.MYSQLDB_HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    port: process.env.MYSQLDB_PORT,
    database: process.env.MYSQLDB_DATABASE
});

app.get('/', (req, res) => {
    res.send('Hola, esta aplicacion esta desarrollada para la entrega de integracion continua');
});

app.get('/consultaDB', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT NOW()');
        res.json(rows);
        connection.release();
    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});