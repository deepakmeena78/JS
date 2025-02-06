import pool from "../db/dbConfig.js";

export default class Task {
    showdata() {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM task_user WHERE status = 'pending'";  // Done
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
            const query = "SELECT * FROM task_user WHERE priorityId = ?";    // Done
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
                let sql = "SELECT * FROM task_user WHERE status = 'pending'";   // Pending
                con.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
        })
    }

    completeShow() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM task_user WHERE status = 'complete'";   // pending
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
                    return reject(err);
                }
                let sql1 = "SELECT * FROM task_user WHERE id = ?";
                let sql2 = "SELECT * FROM label";
                con.query(sql1, [id], (err, taskResult) => {
                    if (err) {
                        con.release();
                        return reject(err);
                    }
                    con.query(sql2, (err, labelResult) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve({
                            task: taskResult,
                            labels: labelResult
                        });
                    });
                });
            });
        });
    }


    edittaskdata(title, description, priorityId, date, role, id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "UPDATE task_user SET title = ?, description = ?, priorityId = ?, date = ?, role = ? WHERE id = ?";
                con.query(sql, [title, description, priorityId, date, role, id], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    nameUpadte(name, imp) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "UPDATE task_user SET name = ? WHERE id = ?";
                con.query(sql, [name, imp], (err, result) => {
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
                let sql = "DELETE FROM task_user WHERE id = ?";
                con.query(sql, [id], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    getlabel() {
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
                });
            });
        });
    }

    assinTask(title, description, priorityId, date, role) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, com) => {
                if (err) {
                    reject(err);
                }
                let sql = "INSERT INTO task_user (title, description, priorityId, date, role) VALUES (?,?,?,?,?)";
                com.query(sql, [title, description, priorityId, date, role], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
        })
    }

    getRole(role) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = "SELECT * FROM user WHERE role = ?";
                con.query(sql, [role], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    InsertRole(name, title, description, priorityId, date, role) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if (err) {
                    reject(err);
                }
                let sql = " UPDATE task_user SET name = ? WHERE title = ? AND description = ? AND priorityId = ? AND date = ? AND role = ?;";
                con.query(sql, [name, title, description, priorityId, date, role], (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}
