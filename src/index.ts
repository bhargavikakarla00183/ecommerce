import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes";
import categorieRoutes from "./routes/categorieRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/categories", categorieRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const port = 9001;
app.listen(9001, () => {
  console.log("Server running on port 9001");
});