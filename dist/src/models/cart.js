"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.carts = (0, pg_core_1.pgTable)("carts", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull().unique(),
    productId: (0, pg_core_1.integer)("product_id").notNull(),
    quantity: (0, pg_core_1.integer)("quantity").notNull().default(1),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
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
