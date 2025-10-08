"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productservice_1 = require("../Services/productservice");
const productService = new productservice_1.ProductService();
class ProductController {
    // Create Product
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productService.createProduct(req.body);
                res.status(201).json(product);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get All Products
    getAllProducts(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService.getAllProducts();
                res.json(products);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get Product by ID
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid product ID" });
                const product = yield productService.getProductById(id);
                if (!product)
                    return res.status(404).json({ message: "Product not found" });
                res.json(product);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Update Product
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid product ID" });
                const updatedProduct = yield productService.updateProduct(id, req.body);
                if (!updatedProduct)
                    return res.status(404).json({ message: "Product not found" });
                res.json(updatedProduct);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Delete Product
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id))
                    return res.status(400).json({ error: "Invalid product ID" });
                const result = yield productService.deleteProduct(id);
                res.json(result);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.ProductController = ProductController;
