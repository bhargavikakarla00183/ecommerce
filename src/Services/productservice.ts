// src/services/ProductService.ts
import { db } from "../db/pg";
import { products } from "../models/Product";
import { eq } from "drizzle-orm";

export class ProductService {
  // Create new product
  async createProduct(data: {
    name: string;
    description: string;
    price: string;             // ✅ changed to string
    discountedPrice: string;   // ✅ changed to string
    stock: number;
    category: string;
    productId: number;
    imageUrl: string;
    avgRating: string;         // ✅ changed to string
    noOfRatings: number;
  }) {
    const [product] = await db.insert(products).values(data).returning();
    return product;
  }

  // Get all products
  async getAllProducts() {
    return await db.select().from(products);
  }

  // Get product by ID
  async getProductById(id: number) {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  // Update product
  async updateProduct(id: number, data: Partial<typeof products.$inferInsert>) {
    const [updated] = await db
      .update(products)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return updated;
  }

  // Delete product
  async deleteProduct(id: number) {
    await db.delete(products).where(eq(products.id, id));
    return { message: "Product deleted successfully" };
  }
}
