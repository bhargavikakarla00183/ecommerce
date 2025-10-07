"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = 9000;
const url = process.env.MONGO_URI;
if (!url) {
    throw new Error("cannot find mongo url");
}
mongoose_1.default.connect(url)
    .then(() => {
    console.log("server is connected to the database");
})
    .catch((error) => {
    console.log("error" + error);
});
