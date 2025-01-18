import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "",
    database: "ejsappdb",
    host: "localhost"
});

export default pool;