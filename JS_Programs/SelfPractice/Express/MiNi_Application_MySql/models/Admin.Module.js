import pool from "../db/dbConfig.js";

export default class Admin {

    SignUpData(email, password) {
        return new Promise((res, rej) => {
            pool.getConnection((err, con) => {
                if (err) {
                    return rej(err);
                }
                let sql = "INSERT INTO admin (email,password) VALUES (? , ?)";
                con.query(sql, [email, password], (err, result) => {
                    if (err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            });
        });
    }
            
    SignInData(email, password) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
                con.query(sql, [email, password], (err, result) => {
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
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    PendingShow() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM task WHERE status = 'pending'";
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