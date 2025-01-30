import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "Ankit@123",
    host: "localhost",
    database: 'mini_application'
});

export default pool;