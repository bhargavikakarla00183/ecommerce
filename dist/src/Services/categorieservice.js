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
exports.CategoryService = void 0;
// src/services/CategoryService.ts
const pg_1 = require("../db/pg");
const categories_1 = require("../models/categories");
const drizzle_orm_1 = require("drizzle-orm");
class CategoryService {
    // Create a new category
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [category] = yield pg_1.db
                .insert(categories_1.categories)
                .values({
                name: data.name,
                description: data.description || null,
            })
                .returning();
            return category;
        });
    }
    // Get all categories
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pg_1.db.select().from(categories_1.categories);
        });
    }
    // Get a single category by ID
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [category] = yield pg_1.db
                .select()
                .from(categories_1.categories)
                .where((0, drizzle_orm_1.eq)(categories_1.categories.id, id));
            return category;
        });
    }
    // Update category
    updateCategory(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [updated] = yield pg_1.db
                .update(categories_1.categories)
                .set({
                name: data.name,
                description: data.description,
                updatedAt: new Date(),
            })
                .where((0, drizzle_orm_1.eq)(categories_1.categories.id, id))
                .returning();
            return updated;
        });
    }
    // Delete category
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pg_1.db.delete(categories_1.categories).where((0, drizzle_orm_1.eq)(categories_1.categories.id, id));
            return { message: "Category deleted successfully" };
        });
    }
}
exports.CategoryService = CategoryService;
