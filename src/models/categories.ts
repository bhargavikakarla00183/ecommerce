// import {Schema , model , Document} from 'mongoose';
// export interface Icategories extends Document{
//     name: String;
//     description: String;
// }
// const Categoryschema = new Schema<Icategories>({
//    name :{ type: String, required: true, unique: true },
//    description:{type: String,}
// });

// export const Category = model<Icategories>('categorie',Categoryschema)


// src/models/categories.ts
import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
