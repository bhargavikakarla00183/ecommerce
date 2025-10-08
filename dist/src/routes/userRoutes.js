"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/users.routes.ts
const express_1 = require("express");
const userController_1 = require("../Controller/userController");
const router = (0, express_1.Router)();
const controller = new userController_1.UserController();
router.post("/createuser", controller.createUser.bind(controller));
router.get("/getallusers", controller.getAllUsers.bind(controller));
router.get("/getUserById/:id", controller.getUserById.bind(controller));
router.put("/updateUser/:id", controller.updateUser.bind(controller));
router.delete("/deleteUser/:id", controller.deleteUser.bind(controller));
exports.default = router;
