import Task from "../models/TaskSS.Module.js";
let task = new Task();

export const Assign = (req, res) => {
    task.getlabel()
        .then((value) => {
            return res.render("Admin/GiveTask.ejs", { data: value });
        })
        .catch((errrr) => {
            console.log(errrr);
            return res.redirect("/task/view-task/all");
        });
}

export const WhoDetails = (req, res) => {
    let { title, description, priorityId, date, role, name } = req.body;
    task.InsertRole(name, title, description, priorityId, date, role)
        .then(() => {
            return res.redirect("/task/view-task/all");
        })
        .catch(() => {
            return res.redirect("/task/role");
        });
}

export const AssignTaskData = (req, res) => {
    const { title, description, role, priorityId } = req.body;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    task.assinTask(title, description, priorityId, date, role)
        .then(() => {
            return task.getRole(role);
        })
        .then((labelData) => {
            const responseData = {
                title,
                description,
                priorityId,
                date,
                role,
                labelData
            };
            return res.render("Admin/Roles.ejs", { data: responseData });
        })
        .catch(() => {
            return res.redirect("/task/assign-task");
        });
}

export const TaskPage = (req, res) => {
    res.render("Admin/CreateTasks.ejs");
}

export const CreateTask = (request, response) => {
    let { title, description, priorityId } = request.body;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    task.CreateTask(title, description, date, priorityId)
        .then((value) => {
            return response.redirect("/task/view-task/all");  // Create Task 
        })
        .catch((errr) => {
            return response.render("Admin/Error.ejs");
        });
}


export const EditTask = (req, res) => {
    const id = req.params.id;
    task.edittask(id)
        .then((result) => {
            res.render("Admin/UpdateTask.ejs", { data: result });
        })
        .catch((err) => {
            return res.render("Admin/Error.ejs");
        });
}

export const EditTaskData = (req, res) => {
    const { id, title, description, role, priorityId } = req.body;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();   //  Update Task
    task.edittaskdata(title, description, priorityId, date, role, id)
        .then(() => {
            return task.getRole(role);
        })
        .then((labelData) => {
            const responseData = {
                id,
                labelData
            };
            return res.render("Admin/Roles2.ejs", { data: responseData });
        })
        .catch(() => {
            return res.redirect("/task/assign-task");
        });
}

export const whoUpdate = (req, res) => {
    const { imp, name } = req.body;
    task.nameUpadte(name, imp)
        .then(() => {
            return res.redirect("/task/view-task/all");
        })
        .catch(() => {
            return res.render("Admin/Error.ejs");
        });
}

export const deleteTask = (req, res) => {
    const id = req.params.id;
    task.delete(id)
        .then(() => {
            res.redirect("/task/view-task/all");
        })
        .catch((err) => {
            return res.render("Admin/Error.ejs");
        });
}

export const ViewTask = (req, res) => {
    const priority = req.params.priority;
    if (priority === "all") {
        task.showdata()
            .then((tasks) => {
                res.render("Admin/AllShowTask.ejs", { data: tasks });
            })
            .catch((tasks) => {
                res.render("Admin/AllShowTask.ejs", { data: tasks });
            });
    } else {
        task.ViewTasked(priority)
            .then((tasks) => {
                res.render("Admin/AllShowTask.ejs", { data: tasks });
            })
            .catch((tasks) => {
                res.render("Admin/AllShowTask.ejs", { data: tasks });
            });
    }
}



export const CompleteTask = (req, res) => {
    task.completeShow()
        .then((value) => {
            res.render("Admin/CompleteTask.ejs", { data: value });
        })
        .catch((rr) => {
            return res.render("Admin/Error.ejs");
        });
}