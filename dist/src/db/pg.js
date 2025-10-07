"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// src/db.ts
const pg_1 = require("pg");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pool = new pg_1.Pool({
    host: "localhost",
    port: 5003,
    user: "postgres",
    password: "Vamsi@123",
    database: "db1",
});
exports.db = (0, node_postgres_1.drizzle)(pool);
