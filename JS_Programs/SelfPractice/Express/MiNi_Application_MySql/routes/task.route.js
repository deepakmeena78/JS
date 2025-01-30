import express from "express";
import { TaskPage, CreateTask, statusstatus, Editstatus, CompleteTask } from "../controller/Task.controller.js";
const router = express.Router();

router.get("/create-task", TaskPage);
router.post("/create-task", CreateTask);      // New Task

router.get("/status", statusstatus);
router.post("/edit-status/:id", Editstatus);      // Status Check and Update

router.get("/complete-task", CompleteTask);    // Complete Task

export default router;