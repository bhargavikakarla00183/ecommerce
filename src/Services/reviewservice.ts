// src/services/ReviewService.ts
import { db } from "../db/pg";
import { reviews } from "../models/Review";
import { eq } from "drizzle-orm";

export class ReviewService {

  async createReview(data: {
    userId: number;
    productId: number;
    rating: number;
    comment: string;
  }) {
    const [review] = await db.insert(reviews).values(data).returning();
    return review;
  }


  async getAllReviews() {
    return await db.select().from(reviews);
  }

  
  async getReviewsByProduct(productId: number) {
    return await db.select().from(reviews).where(eq(reviews.productId, productId));
  }


  async updateReview(
    id: number,
    data: Partial<{
      rating: number;
      comment: string;
    }>
  ) {
    const [updated] = await db
      .update(reviews)
      .set(data)
      .where(eq(reviews.id, id))
      .returning();
    return updated;
  }


  async deleteReview(id: number) {
    await db.delete(reviews).where(eq(reviews.id, id));
    return { message: "Review deleted successfully" };
  }
}
