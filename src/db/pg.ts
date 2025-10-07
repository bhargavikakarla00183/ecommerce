// src/db.ts
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  host: "localhost",
  port: 5003,
  user: "postgres",
  password: "Vamsi@123",
  database: "db1",
});

export const db = drizzle(pool);