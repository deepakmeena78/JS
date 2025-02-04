import pool from "../db/dbConfig.js";

export default class User {
    signUp(name, email, password, role) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "INSERT INTO user (name,email,password,role) Values (?,?,?,?)"
                con.query(sql, [name, email, password, role], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    signin(email, password) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM user WHERE email = ? AND password = ?";
                con.query(sql, [email, password], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}