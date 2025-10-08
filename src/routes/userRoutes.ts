// src/routes/users.routes.ts
import { Router } from "express";
import { UserController } from "../Controller/userController";

const router = Router();
const controller = new UserController();

router.post("/createuser", controller.createUser);
router.get("/getallusers", controller.getAllUsers);
router.get("/getUserById/:id", controller.getUserById);
router.put("/updateUser/:id", controller.updateUser);
router.delete("/deleteUser/:id", controller.deleteUser);

export default router; 