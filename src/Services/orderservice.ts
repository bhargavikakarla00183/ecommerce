// src/services/OrderService.ts
import { db } from "../db/pg";
import { orders } from "../models/orders";
import { eq } from "drizzle-orm";

export class OrderService {
  // Create a new order
  async createOrder(data: {
    userId: number;
    orderId: number;
    productId: number;
    quantity: number;
    price: string;        
    totalAmount: string;
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    orderStatus?: string;
    paymentStatus?: string;
  }) {
    const [order] = await db.insert(orders).values(data).returning();
    return order;
  }

  // Get all orders
  async getAllOrders() {
    return await db.select().from(orders);
  }

  // Get order by ID
  async getOrderById(id: number) {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }

  // Update an order
  async updateOrder(
    id: number,
    data: Partial<{
      orderStatus: string;
      paymentStatus: string;
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    }>
  ) {
    const [updated] = await db
      .update(orders)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(orders.id, id))
      .returning();
    return updated;
  }

  // Delete an order
  async deleteOrder(id: number) {
    await db.delete(orders).where(eq(orders.id, id));
    return { message: "Order deleted successfully" };
  }
}
