// src/routes/users.routes.ts
import { Router } from "express";
import { CategoryController } from "../Controller/categorieController";

const router = Router();
const controller = new CategoryController();

router.post("/createCategory", controller.createCategory);
router.get("/getAllCategories", controller.getAllCategories);
router.get("/getCategoryById/:id", controller.getCategoryById);
router.put("/updateCategory/:id", controller.updateCategory);
router.delete("/deleteCategory/:id", controller.deleteCategory);

export default router; 