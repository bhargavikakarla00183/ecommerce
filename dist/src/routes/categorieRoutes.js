"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/users.routes.ts
const express_1 = require("express");
const categorieController_1 = require("../Controller/categorieController");
const router = (0, express_1.Router)();
const controller = new categorieController_1.CategoryController();
router.post("/createCategory", controller.createCategory);
router.get("/getAllCategories", controller.getAllCategories);
router.get("/getCategoryById/:id", controller.getCategoryById);
router.put("/updateCategory/:id", controller.updateCategory);
router.delete("/deleteCategory/:id", controller.deleteCategory);
exports.default = router;
