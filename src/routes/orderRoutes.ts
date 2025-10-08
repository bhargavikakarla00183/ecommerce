// src/routes/orderRoutes.ts
import { Router } from "express";
import { OrderController } from "../Controller/orderController";

const router = Router();
const controller = new OrderController();

router.post("/createOrder", controller.createOrder);
router.get("/getAllOrders", controller.getAllOrders);
router.get("/getOrderById/:id", controller.getOrderById);
router.put("/updateOrder/:id", controller.updateOrder);
router.delete("/deleteOrder/:id", controller.deleteOrder);

export default router;
