"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.orders = (0, pg_core_1.pgTable)("orders", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    userId: (0, pg_core_1.integer)("user_id").notNull(),
    orderId: (0, pg_core_1.integer)("order_id").notNull(),
    productId: (0, pg_core_1.integer)("product_id").notNull(),
    quantity: (0, pg_core_1.integer)("quantity").notNull(),
    price: (0, pg_core_1.numeric)("price").notNull(),
    totalAmount: (0, pg_core_1.numeric)("total_amount").notNull(),
    street: (0, pg_core_1.varchar)("street", { length: 255 }),
    city: (0, pg_core_1.varchar)("city", { length: 100 }),
    state: (0, pg_core_1.varchar)("state", { length: 100 }),
    postalCode: (0, pg_core_1.varchar)("postal_code", { length: 20 }),
    country: (0, pg_core_1.varchar)("country", { length: 100 }),
    orderStatus: (0, pg_core_1.varchar)("order_status", { length: 20 }).default("pending"),
    paymentStatus: (0, pg_core_1.varchar)("payment_status", { length: 20 }).default("pending"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
// import { Schema, model, Document, Types } from "mongoose";
// export interface Iorders extends Document {
//   userid: Types.ObjectId;
//   products: {
//     productid: Types.ObjectId;
//     quantity: Number;
//     price: Number;
//   }[];
//   totalamount: Number;
//   Shippingaddress: {
//     Street: string;
//     city: string;
//     state: string;
//     postalcode: Number;
//     Country: String;
//   };
//   orderStatus: "pending" | "shipped" | "Delivered" | "Cancelled";
//   paymentStatus: "pending" | "paid" | "Refunded";
// }
// const orderschema = new Schema<Iorders>({
//   userid: { type: Schema.ObjectId, required: true },
//   products: [
//     {
//       productid: { type: Schema.ObjectId, required: true },
//       quantity: { type: Number, required: true },
//       price: { type: Number, required: true },
//     },
//   ],
//   totalamount: { type: Number, required: true },
//   Shippingaddress: {
//     Street: String,
//     city: String,
//     state: String,
//     postalcode: Number,
//     Country: String,
//   },
//   orderStatus: {
//       type: String,
//       enum: ["pending", "shipped", "Delivered", "Cancelled"],
//       default: "pending",
//     },
//   paymentStatus: {
//     type: String,
//     enum: ["pending", "paid", "Refunded"],
//     default: "pending",
//   },
// });
// export const order = model<Iorders>("order", orderschema);
