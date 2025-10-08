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
exports.CartController = void 0;
const cartservice_1 = require("../Services/cartservice");
const cartService = new cartservice_1.CartService();
class CartController {
    addToCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, productId, quantity } = req.body;
                const result = yield cartService.addToCart(userId, productId, quantity);
                res.status(201).json({ message: "Item added to cart", data: result });
            }
            catch (error) {
                console.error("Error adding to cart:", error);
                res.status(500).json({ error: "Failed to add item to cart" });
            }
        });
    }
    getUserCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.userId);
                const cart = yield cartService.getUserCart(userId);
                res.status(200).json(cart);
            }
            catch (error) {
                console.error("Error fetching cart:", error);
                res.status(500).json({ error: "Failed to fetch cart" });
            }
        });
    }
    updateQuantity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, productId, quantity } = req.body;
                const updated = yield cartService.updateQuantity(userId, productId, quantity);
                res.status(200).json({ message: "Cart updated", data: updated });
            }
            catch (error) {
                console.error("Error updating cart:", error);
                res.status(500).json({ error: "Failed to update cart" });
            }
        });
    }
    removeFromCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, productId } = req.body;
                const deleted = yield cartService.removeFromCart(userId, productId);
                res.status(200).json({ message: "Item removed", data: deleted });
            }
            catch (error) {
                console.error("Error removing item:", error);
                res.status(500).json({ error: "Failed to remove item" });
            }
        });
    }
    clearCart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.userId);
                const result = yield cartService.clearCart(userId);
                res.status(200).json(result);
            }
            catch (error) {
                console.error("Error clearing cart:", error);
                res.status(500).json({ error: "Failed to clear cart" });
            }
        });
    }
}
exports.CartController = CartController;
