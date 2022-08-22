require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.user,
        password: process.env.password,
        database: "employee_tracker"
    },
);

module.exports = db;