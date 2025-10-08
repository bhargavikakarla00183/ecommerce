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
exports.ProductService = void 0;
// src/services/ProductService.ts
const pg_1 = require("../db/pg");
const Product_1 = require("../models/Product");
const drizzle_orm_1 = require("drizzle-orm");
class ProductService {
    // Create new product
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [product] = yield pg_1.db.insert(Product_1.products).values(data).returning();
            return product;
        });
    }
    // Get all products
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pg_1.db.select().from(Product_1.products);
        });
    }
    // Get product by ID
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [product] = yield pg_1.db.select().from(Product_1.products).where((0, drizzle_orm_1.eq)(Product_1.products.id, id));
            return product;
        });
    }
    // Update product
    updateProduct(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [updated] = yield pg_1.db
                .update(Product_1.products)
                .set(Object.assign(Object.assign({}, data), { updatedAt: new Date() }))
                .where((0, drizzle_orm_1.eq)(Product_1.products.id, id))
                .returning();
            return updated;
        });
    }
    // Delete product
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pg_1.db.delete(Product_1.products).where((0, drizzle_orm_1.eq)(Product_1.products.id, id));
            return { message: "Product deleted successfully" };
        });
    }
}
exports.ProductService = ProductService;
