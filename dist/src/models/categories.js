"use strict";
// import {Schema , model , Document} from 'mongoose';
// export interface Icategories extends Document{
//     name: String;
//     description: String;
// }
// const Categoryschema = new Schema<Icategories>({
//    name :{ type: String, required: true, unique: true },
//    description:{type: String,}
// });
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
// export const Category = model<Icategories>('categorie',Categoryschema)
// src/models/categories.ts
const pg_core_1 = require("drizzle-orm/pg-core");
exports.categories = (0, pg_core_1.pgTable)("categories", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull().unique(),
    description: (0, pg_core_1.text)("description"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
