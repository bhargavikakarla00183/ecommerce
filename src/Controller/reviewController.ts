// src/controllers/ReviewController.ts
import { Request, Response } from "express";
import { ReviewService } from "../Services/reviewservice";

const reviewService = new ReviewService();

export class ReviewController {

  async createReview(req: Request, res: Response) {
    try {
      const review = await reviewService.createReview(req.body);
      res.status(201).json(review);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  async getAllReviews(_req: Request, res: Response) {
    try {
      const allReviews = await reviewService.getAllReviews();
      res.json(allReviews);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  async getReviewsByProduct(req: Request, res: Response) {
    try {
      const productId = Number(req.params.productId);
      if (isNaN(productId)) return res.status(400).json({ error: "Invalid product ID" });

      const reviews = await reviewService.getReviewsByProduct(productId);
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

 
  async updateReview(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid review ID" });

      const updated = await reviewService.updateReview(id, req.body);
      if (!updated) return res.status(404).json({ message: "Review not found" });

      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }


  async deleteReview(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ error: "Invalid review ID" });

      const result = await reviewService.deleteReview(id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
}
