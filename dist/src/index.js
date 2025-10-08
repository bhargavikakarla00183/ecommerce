"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const categorieRoutes_1 = __importDefault(require("./routes/categorieRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
app.use("/categories", categorieRoutes_1.default);
app.use("/products", productRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
const port = 9001;
app.listen(9001, () => {
    console.log("Server running on port 9001");
});
