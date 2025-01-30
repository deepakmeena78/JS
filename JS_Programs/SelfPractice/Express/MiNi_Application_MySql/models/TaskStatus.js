import pool from "../db/dbConfig.js";

export default class StatusCheck {
    check() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM task";
                con.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    updateStatus(id, newStatus) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "UPDATE task SET status = ? WHERE id = ?";
                con.query(sql, [newStatus, id], (err, result) => {
                    con.release();
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}
