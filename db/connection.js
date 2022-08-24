require('dotenv').config();
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.user,
        password: process.env.password,
        database: "employee tracker"
    },
    );

    db.connect(function(err) {
        if (err) throw err;});
    
module.exports = db;