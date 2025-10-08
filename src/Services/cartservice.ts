import { db } from "../db/pg";
import { carts } from "../models/cart";
import { eq } from "drizzle-orm";

export class CartService {
  //  Add item to cart
  async addToCart(userId: number, productId: number, quantity: number = 1) {
    const [cartItem] = await db
      .insert(carts)
      .values({ userId, productId, quantity })
      .returning();

    return cartItem;
  }

  //  Get all items in cart for a user
  async getUserCart(userId: number) {
    return await db.select().from(carts).where(eq(carts.userId, userId));
  }

  //  Update cart item quantity
  async updateQuantity(userId: number, productId: number, quantity: number) {
    const [updated] = await db
      .update(carts)
      .set({ quantity })
      .where(eq(carts.userId, userId))
      .returning();

    return updated;
  }

  // Remove item from cart
  async removeFromCart(userId: number, productId: number) {
    const [deleted] = await db
      .delete(carts)
      .where(eq(carts.userId, userId))
      .returning();

    return deleted;
  }

  // Clear all items from user's cart
  async clearCart(userId: number) {
    await db.delete(carts).where(eq(carts.userId, userId));
    return { message: "Cart cleared successfully" };
  }
}
