"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    dialect: "postgresql",
    schema: "./src/models", // path to where your tables are defined
    out: "./drizzle", // folder where migrations will be saved
    dbCredentials: {
        host: "localhost",
        user: "postgres",
        password: "Vamsi@123",
        database: "db1",
        port: 5003,
        ssl: false,
    },
});
