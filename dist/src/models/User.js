"use strict";
// import {Schema , model, Document} from 'mongoose';
// export interface IUser extends Document {
//     name : string;
//     email: string;
//     password: string;
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.userRoleEnum = void 0;
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
const pg_core_1 = require("drizzle-orm/pg-core");
exports.userRoleEnum = (0, pg_core_1.pgEnum)("role", ["user", "admin"]);
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).unique().notNull(),
    password: (0, pg_core_1.text)("password").notNull(),
    role: (0, exports.userRoleEnum)("role").default("user").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at").defaultNow().notNull(),
});
