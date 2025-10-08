// src/controllers/CategoryController.ts
import { Request, Response } from "express";
import { CategoryService } from "../Services/categorieservice";

const categoryService = new CategoryService();

export class CategoryController {
  // Create category
  async createCategory(req: Request, res: Response) {
    try {
      const category = await categoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get all categories
  async getAllCategories(_req: Request, res: Response) {
    try {
      const data = await categoryService.getAllCategories();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get category by ID
  async getCategoryById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid category ID" });

      const category = await categoryService.getCategoryById(id);
      if (!category) return res.status(404).json({ message: "Category not found" });

      res.json(category);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Update category
  async updateCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid category ID" });

      const updated = await categoryService.updateCategory(id, req.body);
      if (!updated) return res.status(404).json({ message: "Category not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Delete category
  async deleteCategory(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid category ID" });

      const result = await categoryService.deleteCategory(id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
}
