import express from "express";
import { EditTask, EditTaskData, deleteTask, CompleteTask, ViewTask, AssignTaskData, Assign, WhoDetails, whoUpdate } from "../controller/Task.controller.js";
const router = express.Router();

router.get("/edit-task/:id", EditTask);            // Edit Task
router.post("/edit-task", EditTaskData);           // Edit Task Data Update
router.get("/delete-task/:id", deleteTask);        // Delete Task
router.get("/complete-task", CompleteTask);        // Complete Task
router.get("/view-task/:priority", ViewTask);      // View Task All
router.post("/assign-task", AssignTaskData)         // Assign To DataBAse
router.get("/assign-task", Assign)         // Assign To DataBAse
router.post("/who", WhoDetails);                     // User Details
router.post("/whoupdate", whoUpdate);                // User Update Set

export default router;
