import { defineConfig } from "drizzle-kit";


export default defineConfig({
  dialect: "postgresql",
  schema: "./src/models",   // path to where your tables are defined
  out: "./drizzle",         // folder where migrations will be saved
  dbCredentials: {
    host: "localhost",
    user: "postgres",
    password: "Vamsi@123" ,
    database:"db1" ,
    port: 5003,
    ssl: false,
  },
});