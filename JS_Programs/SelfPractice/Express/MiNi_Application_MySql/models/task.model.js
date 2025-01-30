import pool from "../db/dbConfig.js";

export default class Task {
    constructor(title, description, date, priorityId) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priorityId = priorityId;
    }

    insertTask() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "INSERT INTO task (title, description, date, priorityId) VALUES (?,?,?,?)";
                con.query(sql, [this.title, this.description, this.date, this.priorityId], (err, result) => {
                    con.release();
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
};