"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatecategoryvalidation = exports.categoryvalidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.categoryvalidation = joi_1.default.object({
    name: joi_1.default.string().min(3).max(50).required().messages({
        "string.empty": "Category name is required",
        "string.min": "Category name must be atleast 3 characters",
    }),
    description: joi_1.default.string().min(10).max(200).required().messages({
        "string.empty": "Description is required",
        "string.min": "Description must be atleast 10 characters",
    }),
});
exports.updatecategoryvalidation = joi_1.default.object({
    name: joi_1.default.string().min(3).max(50).optional().messages({
        "string.empty": "Category name is required",
        "string.min": "category name must be atleast 3 characters"
    }),
    description: joi_1.default.string().min(10).max(200).required().messages({
        "string.empty": "Description is required",
        "string.min": "Description must be atleast 10 characters"
    }),
});
