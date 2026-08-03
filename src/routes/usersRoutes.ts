import { Router } from "express";
import { usersController } from "../controllers/usersController.js";

const router = Router();

const controller = new usersController();

router.post("/users", controller.criar.bind(controller));

export default router;