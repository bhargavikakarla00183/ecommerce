// import {Schema , model, Document} from 'mongoose';
// export interface IUser extends Document {
//     name : string;
//     email: string;
//     password: string;

//     address:[{
//         phone:Number;
//         street:string;
//         city:string;
//         state:string;
//         pincode:Number;
//     }],
//     role: string;
// }

// const userSchema = new Schema<IUser>({
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     password: {type: String, required: true },
//     address: [{
//         phone: {type: Number, required: true},
//         street: {type: String, required: true},
//         city: { type:String, required: true},
//         state: {type:String, required: true},
//         pincode:{type:Number, min:6,max:6,required:true},
//     }],
//         role : { type: String, enum: ['user' , 'admin'], default:'user'},
//     },{timestamps: true});

//     export const User = model<IUser>('User', userSchema);

// schema/users.ts

import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enum for user roles
export const userRoleEnum = pgEnum("role", ["user", "admin"]);

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  password: text("password").notNull(),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});


