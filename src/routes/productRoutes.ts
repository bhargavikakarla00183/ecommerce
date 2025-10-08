import { Router } from "express";
import { ProductController } from "../Controller/productController";

const router = Router();
const controller = new ProductController();

router.post("/createProduct", controller.createProduct);
router.get("/getAllProducts", controller.getAllProducts);
router.get("/getProductById/:id", controller.getProductById);
router.put("/updateProduct/:id", controller.updateProduct);
router.delete("/deleteProduct/:id", controller.deleteProduct);

export default router; 