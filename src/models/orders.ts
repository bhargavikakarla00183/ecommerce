import { pgTable, serial, integer, varchar, numeric, timestamp } from "drizzle-orm/pg-core";

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  orderId: integer("order_id").notNull(),
  productId: integer("product_id").notNull(),
  quantity: integer("quantity").notNull(),
  price: numeric("price").notNull(),
  totalAmount: numeric("total_amount").notNull(),
  street: varchar("street", { length: 255 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  postalCode: varchar("postal_code", { length: 20 }),
  country: varchar("country", { length: 100 }),
  orderStatus: varchar("order_status", { length: 20 }).default("pending"),
  paymentStatus: varchar("payment_status", { length: 20 }).default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
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

