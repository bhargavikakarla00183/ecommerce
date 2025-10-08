// src/routes/reviewRoutes.ts
import { Router } from "express";
import { ReviewController } from "../Controller/reviewController";

const router = Router();
const controller = new ReviewController();

router.post("/createReview",  controller.createReview);
router.get("/getAllReviews", controller.getAllReviews);
router.get("/getReviewsByProduct/:id",  controller.getReviewsByProduct);
router.put("/updateReview:id", controller.updateReview);
router.delete("/deleteReview/:id", controller.deleteReview);

export default router;
