import pool from "../db/dbConfig.js";

export default class Show {
    showdata() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    console.log("Connection Error:", err);
                    return reject(err);
                }
                let sql = "SELECT * FROM task";
                con.query(sql, (err, result) => {
                    con.release();
                    if (err) {
                        console.log("Query Error:", err);
                        return reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}
