import Task from "../models/TaskSS.js";
let task = new Task();

export const AssignTask = (req, res) => {
    return res.render("Admin/GiveTask.ejs");
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
    const { id, title, description, priorityId } = req.body;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    task.edittaskdata(title, description, date, priorityId, id)
        .then(() => {
            res.redirect("/task/view-task/all");
        })
        .catch((rr) => {
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