import pool from "../db/dbConfig.js";



export default class Task {
    showdata() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM task";
            pool.query(sql, (err, result) => {
                if (err) {
                    console.log("Query Error:", err);
                    return reject(err);
                }
                if (result.length) {
                    resolve(result);
                } else {
                    reject(new Error("No tasks found"));
                }
            });
        });
    }

    ViewTasked(priorityId) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM task WHERE priorityId = ?";
            pool.query(query, [priorityId], (err, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.length) {
                    resolve(result);
                } else {
                    reject(new Error("No tasks found for the given priority"));
                }
            });
        });
    }

    GetPenddingTask() {
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
                })
            })
        })


    }

    CreateTask(title, description, date, priorityId) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "INSERT INTO task (title, description, date, priorityId) VALUES (?,?,?,?)";
                con.query(sql, [title, description, date, priorityId], (err, result) => {
                    console.log(title, description, date, priorityId);
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    completeShow() {
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

    edittask(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM task WHERE id = ?";
                con.query(sql, [id], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    edittaskdata(title, description, date, priorityId, id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "UPDATE task SET title = ?, description = ?, date = ?, priorityId = ? WHERE id = ?";
                con.query(sql, [title, description, date, priorityId, id], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "DELETE FROM task WHERE id = ?";
                con.query(sql, [id], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}
