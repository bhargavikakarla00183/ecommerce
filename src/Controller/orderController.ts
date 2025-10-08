// src/controllers/OrderController.ts
import { Request, Response } from "express";
import { OrderService } from "../Services/orderservice";

const orderService = new OrderService();

export class OrderController {
  // Create order
  async createOrder(req: Request, res: Response) {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get all orders
  async getAllOrders(_req: Request, res: Response) {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get order by ID
  async getOrderById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid order ID" });

      const order = await orderService.getOrderById(id);
      if (!order) return res.status(404).json({ message: "Order not found" });

      res.json(order);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Update order
  async updateOrder(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid order ID" });

      const updated = await orderService.updateOrder(id, req.body);
      if (!updated) return res.status(404).json({ message: "Order not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Delete order
  async deleteOrder(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid order ID" });

      const result = await orderService.deleteOrder(id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
}
