import pool from "../db/dbConfig.js";

export default class Complete {
    complete() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM task WHERE status = 'complete'";
                con.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}