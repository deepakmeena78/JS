import express from "express";
import { TaskPage, CreateTask, EditTask, EditTaskData, deleteTask, CompleteTask, ViewTask ,AssignTask} from "../controller/Task.controller.js";
const router = express.Router();

router.get("/create-task", TaskPage);              // Task Page Show
router.post("/create-task", CreateTask);           // New Task
router.get("/edit-task/:id", EditTask);            // Edit Task
router.post("/edit-task", EditTaskData);           // Edit Task Data Update
router.get("/delete-task/:id", deleteTask);        // Delete Task
router.get("/complete-task", CompleteTask);        // Complete Task
router.get("/view-task/:priority", ViewTask);      // View Task All
router.get("/assign-task",AssignTask);             // Assign Task

export default router;