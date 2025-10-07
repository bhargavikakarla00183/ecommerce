"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginvalidation = void 0;
const joi_1 = __importDefault(require("joi"));
const loginvalidation = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email",
        }),
        password: joi_1.default.string().required().messages({
            "string.empty": "Password is required",
        }),
    });
    return schema.validate(data, { abortEarly: false });
};
exports.loginvalidation = loginvalidation;
