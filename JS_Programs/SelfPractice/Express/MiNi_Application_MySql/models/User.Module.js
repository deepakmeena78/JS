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

    getRole() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM label";
                con.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
        })
    }

    completetask(ID) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT u.*, t.* FROM user u LEFT JOIN task_user t ON u.name = t.name WHERE u.id = ? AND t.status = 'pending'";
                con.query(sql, [ID], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
        })
    }
}