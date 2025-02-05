import express from "express";
import { TaskPage, CreateTask, EditTask, EditTaskData, deleteTask, CompleteTask, ViewTask, AssignTaskData,Assign, WhoDetails } from "../controller/Task.controller.js";
const router = express.Router();

router.get("/create-task", TaskPage);              // Task Page Show
router.post("/create-task", CreateTask);           // New Task
router.get("/edit-task/:id", EditTask);            // Edit Task
router.post("/edit-task", EditTaskData);           // Edit Task Data Update
router.get("/delete-task/:id", deleteTask);        // Delete Task
router.get("/complete-task", CompleteTask);        // Complete Task
router.get("/view-task/:priority", ViewTask);      // View Task All
router.post("/assign-task", AssignTaskData)         // Assign To DataBAse
router.get("/assign-task", Assign)         // Assign To DataBAse
router.post("/who", WhoDetails);                     // User Details
export default router;
