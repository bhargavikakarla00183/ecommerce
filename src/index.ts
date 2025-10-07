import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
const port = 9000;
app.listen(9000, () => {
  console.log("Server running on port 9000");
});