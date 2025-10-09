import { Request, Response } from "express";
import { CartService } from "../Services/cartservice";

const cartService = new CartService();

export class CartController {

  async addToCart(req: Request, res: Response) {
    try {
      const { userId, productId, quantity } = req.body;
      const result = await cartService.addToCart(userId, productId, quantity);
      res.status(201).json({ message: "Item added to cart", data: result });
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Failed to add item to cart" });
    }
  }

 
  async getUserCart(req: Request, res: Response) {
    try {
      const userId = Number(req.params.userId);
      const cart = await cartService.getUserCart(userId);
      res.status(200).json(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      res.status(500).json({ error: "Failed to fetch cart" });
    }
  }

 
  async updateQuantity(req: Request, res: Response) {
    try {
      const { userId, productId, quantity } = req.body;
      const updated = await cartService.updateQuantity(userId, productId, quantity);
      res.status(200).json({ message: "Cart updated", data: updated });
    } catch (error) {
      console.error("Error updating cart:", error);
      res.status(500).json({ error: "Failed to update cart" });
    }
  }


  async removeFromCart(req: Request, res: Response) {
    try {
      const { userId, productId } = req.body;
      const deleted = await cartService.removeFromCart(userId, productId);
      res.status(200).json({ message: "Item removed", data: deleted });
    } catch (error) {
      console.error("Error removing item:", error);
      res.status(500).json({ error: "Failed to remove item" });
    }
  }

 
  async clearCart(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const result = await cartService.clearCart(userId);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error clearing cart:", error);
      res.status(500).json({ error: "Failed to clear cart" });
    }
  }
}
