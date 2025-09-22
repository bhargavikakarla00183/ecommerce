import { Schema, model, Document, Types } from "mongoose";
export interface Iorders extends Document {
  userid: Types.ObjectId;
  products: {
    productid: Types.ObjectId;
    quantity: Number;
    price: Number;
  }[];
  totalamount: Number;
  Shippingaddress: {
    Street: string;
    city: string;
    state: string;
    postalcode: Number;
    Country: String;
  };
  orderStatus: "pending" | "shipped" | "Delivered" | "Cancelled";
  paymentstatus: "pending" | "paid" | "Refunded";
}

const orderschema = new Schema<Iorders>({
  userid: { type: Schema.ObjectId, required: true },
  products: [
    {
      productid: { type: Schema.ObjectId, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalamount: { type: Number, required: true },
  Shippingaddress: {
    Street: String,
    city: String,
    state: String,
    postalcode: Number,
    Country: String,
  },
  orderStatus: {
    type: String,
    enum: ["pending","shipped" , "Delivered", "Cancelled"],
    default: "Pending",
  },
 paymentStatus: {
    type: String,
    enum: ["Pending", "Paid", "Refunded"],
    default: "Pending",
  },
});

export const order = model<Iorders>("order", orderschema);
