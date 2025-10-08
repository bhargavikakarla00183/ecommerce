import { Router } from "express";
import { CartController } from "../Controller/cartController";

const router = Router();
const controller = new CartController();

router.post("/addToCart", controller.addToCart);
router.get("/getUserCart", controller.getUserCart);
router.get("/updateQuantity/:id", controller.updateQuantity);
router.put("/removeFromCart/:id", controller.removeFromCart);
router.delete("/clearCart", controller.clearCart);

export default router; 