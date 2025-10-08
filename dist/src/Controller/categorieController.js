"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categorieservice_1 = require("../Services/categorieservice");
const categoryService = new categorieservice_1.CategoryService();
class CategoryController {
    // Create category
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield categoryService.createCategory(req.body);
                res.status(201).json(category);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get all categories
    getAllCategories(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield categoryService.getAllCategories();
                res.json(data);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get category by ID
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid category ID" });
                const category = yield categoryService.getCategoryById(id);
                if (!category)
                    return res.status(404).json({ message: "Category not found" });
                res.json(category);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Update category
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid category ID" });
                const updated = yield categoryService.updateCategory(id, req.body);
                if (!updated)
                    return res.status(404).json({ message: "Category not found" });
                res.json(updated);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Delete category
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid category ID" });
                const result = yield categoryService.deleteCategory(id);
                res.json(result);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.CategoryController = CategoryController;
