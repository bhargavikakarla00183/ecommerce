// import {Schema ,model , Document,Types} from "mongoose";
// export interface Icart extends Document{
//     userId : Types.ObjectId;
//     products:{
//         productId: Types.ObjectId;
//         quantity: number;
//     }[];
//     createdAt: Date;
//     updatedAt: Date;
// }
// const cartSchema = new Schema<Icart>({
//     userId:{type: Schema.Types.ObjectId, ref: 'User',required: true, unique: true},
//     products: [{
//         productId: {type: Schema.Types.ObjectId, ref: 'product', required:true},
//         quantity:{type: Number, required:true, min:1},
//     }], 
// },{timestamps: true});

// export const cart = model<Icart>('cart',cartSchema);

import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";

export const carts = pgTable("carts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().unique(),
   productId: integer("product_id").notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

