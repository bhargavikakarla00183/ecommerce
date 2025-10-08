"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/users.routes.ts
const express_1 = require("express");
const userController_1 = require("../Controller/userController");
const router = (0, express_1.Router)();
const controller = new userController_1.UserController();
router.post("/createuser", controller.createUser);
router.get("/getallusers", controller.getAllUsers);
router.get("/getUserById/:id", controller.getUserById);
router.put("/updateUser/:id", controller.updateUser);
router.delete("/deleteUser/:id", controller.deleteUser);
exports.default = router;
