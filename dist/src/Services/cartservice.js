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
exports.CartService = void 0;
const pg_1 = require("../db/pg");
const cart_1 = require("../models/cart");
const drizzle_orm_1 = require("drizzle-orm");
class CartService {
    //  Add item to cart
    addToCart(userId_1, productId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, productId, quantity = 1) {
            const [cartItem] = yield pg_1.db
                .insert(cart_1.carts)
                .values({ userId, productId, quantity })
                .returning();
            return cartItem;
        });
    }
    //  Get all items in cart for a user
    getUserCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pg_1.db.select().from(cart_1.carts).where((0, drizzle_orm_1.eq)(cart_1.carts.userId, userId));
        });
    }
    //  Update cart item quantity
    updateQuantity(userId, productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const [updated] = yield pg_1.db
                .update(cart_1.carts)
                .set({ quantity })
                .where((0, drizzle_orm_1.eq)(cart_1.carts.userId, userId))
                .returning();
            return updated;
        });
    }
    // Remove item from cart
    removeFromCart(userId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [deleted] = yield pg_1.db
                .delete(cart_1.carts)
                .where((0, drizzle_orm_1.eq)(cart_1.carts.userId, userId))
                .returning();
            return deleted;
        });
    }
    // Clear all items from user's cart
    clearCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pg_1.db.delete(cart_1.carts).where((0, drizzle_orm_1.eq)(cart_1.carts.userId, userId));
            return { message: "Cart cleared successfully" };
        });
    }
}
exports.CartService = CartService;
