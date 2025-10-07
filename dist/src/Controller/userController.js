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
exports.UserController = void 0;
const userservice_1 = require("../Services/userservice");
const userService = new userservice_1.UserService();
class UserController {
    // Create user
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const user = yield userService.createUser(input);
                res.status(201).json(user);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get all users
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService.getAllUsers();
                res.status(200).json(users);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Get user by ID
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const user = yield userService.getUserById(id);
                if (!user)
                    return res.status(404).json({ message: "User not found" });
                res.status(200).json(user);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Update user
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const data = req.body;
                const updatedUser = yield userService.updateUser(id, data);
                res.status(200).json(updatedUser);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
    // Delete user
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield userService.deleteUser(id);
                res.status(200).json(result);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.UserController = UserController;
