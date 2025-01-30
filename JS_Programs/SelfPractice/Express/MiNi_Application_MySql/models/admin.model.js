import pool from "../db/dbConfig.js";

export default class Admin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    insertData() {
        return new Promise((res, rej) => {
            pool.getConnection((err, con) => {
                if (err) {
                    return rej(err);
                }
                let sql = "INSERT INTO admin (email,password) VALUES (? , ?)";
                con.query(sql, [this.email, this.password], (err, result) => {
                    con.release();
                    if (err) {
                        rej(err);
                    } else {
                        res(result);
                    }
                });
            });
        });
    }
}