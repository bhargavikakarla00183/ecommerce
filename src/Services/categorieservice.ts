// src/services/CategoryService.ts
import { db } from "../db/pg";
import { categories } from "../models/categories";
import { eq } from "drizzle-orm";

export class CategoryService {
  // Create a new category
  async createCategory(data: { name: string; description?: string }) {
    const [category] = await db
      .insert(categories)
      .values({
        name: data.name,
        description: data.description || null,
      })
      .returning();
    return category;
  }

  // Get all categories
  async getAllCategories() {
    return await db.select().from(categories);
  }

  // Get a single category by ID
  async getCategoryById(id: number) {
    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.id, id));
    return category;
  }

  // Update category
  async updateCategory(id: number, data: Partial<{ name: string; description: string }>) {
    const [updated] = await db
      .update(categories)
      .set({
        name: data.name,
        description: data.description,
        updatedAt: new Date(),
      })
      .where(eq(categories.id, id))
      .returning();
    return updated;
  }

  // Delete category
  async deleteCategory(id: number) {
    await db.delete(categories).where(eq(categories.id, id));
    return { message: "Category deleted successfully" };
  }
}
