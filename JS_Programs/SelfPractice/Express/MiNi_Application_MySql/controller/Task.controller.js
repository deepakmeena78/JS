import Task from "../models/task.model.js";
import StatusCheck from "../models/TaskStatus.js";
import Complete from "../models/completeTask.js";

export const TaskPage = (req, res) => {
    res.render("TaskCreate.ejs");
}

export const CreateTask = (request, response) => {
    let { title, description, priorityId } = request.body;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let taskin = new Task(title, description, date, priorityId);
    taskin.insertTask()
        .then((value) => {
            return response.status(200).json({ msg: "Data : ", value });  // Create Task 
        })
        .catch((errr) => {
            return response.status(500).json({ msg: "ERROR : ", errr });
        });
}

export const statusstatus = (req, res) => {
    let tem = new StatusCheck();
    tem.check()
        .then((value) => {
            res.render("ShowTask.ejs", { data: value }); // Render tasks on the page
        })
        .catch((err) => {
            return res.status(500).json({ msg: "ERROR: Unable to fetch tasks", err });
        });
};

export const Editstatus = (req, res) => {
    const taskId = req.params.id;  
    const newStatus = "complete"; 
    let statusUpdate = new StatusCheck();
    statusUpdate.updateStatus(taskId, newStatus)
        .then((result) => {
            res.redirect("/task/complete-task"); 
        })
        .catch((err) => {
            return res.status(500).json({ msg: "ERROR: Unable to update status", err });
        });
};


export const CompleteTask = (req, res) => {
    let data2 = new Complete();
    data2.complete()
        .then((value) => {
            res.render("CompleteTask.ejs", { data: value });
        })
        .catch((rr) => {
            return res.status(500).json({ msg: "ERRORR Good Yaar" });
        });
}