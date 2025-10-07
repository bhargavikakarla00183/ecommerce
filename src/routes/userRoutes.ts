// src/routes/users.routes.ts
import { Router } from "express";
import { UserController } from "../Controller/userController";

const router = Router();
const controller = new UserController();

router.post("/createuser", controller.createUser.bind(controller));
router.get("/getallusers", controller.getAllUsers.bind(controller));
router.get("/getUserById/:id", controller.getUserById.bind(controller));
router.put("/updateUser/:id", controller.updateUser.bind(controller));
router.delete("/deleteUser/:id", controller.deleteUser.bind(controller));

export default router;