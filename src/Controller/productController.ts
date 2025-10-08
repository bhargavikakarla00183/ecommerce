// src/controllers/ProductController.ts
import { Request, Response } from "express";
import { ProductService } from "../Services/productservice";

const productService = new ProductService();

export class ProductController {
  // Create Product
  async createProduct(req: Request, res: Response) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get All Products
  async getAllProducts(_req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get Product by ID
  async getProductById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid product ID" });

      const product = await productService.getProductById(id);
      if (!product) return res.status(404).json({ message: "Product not found" });

      res.json(product);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Update Product
  async updateProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid product ID" });

      const updatedProduct = await productService.updateProduct(id, req.body);
      if (!updatedProduct)
        return res.status(404).json({ message: "Product not found" });

      res.json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Delete Product
  async deleteProduct(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid product ID" });

      const result = await productService.deleteProduct(id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
}
