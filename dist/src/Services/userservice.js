"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const pg_1 = require("../db/pg"); // your Drizzle DB instance
const User_1 = require("../models/User");
const drizzle_orm_1 = require("drizzle-orm"); // import eq for comparisons
class UserService {
    constructor() {
        this.db = pg_1.db; // assign the imported db instance
    }
    // Create a new user
    createUser(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db
                .insert(User_1.users)
                .values(input)
                .returning();
            return result[0]; // return the first inserted user
        });
    }
    // Get all users
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.select().from(User_1.users);
        });
    }
    // Get a user by ID
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db
                .select()
                .from(User_1.users)
                .where((0, drizzle_orm_1.eq)(User_1.users.id, id));
            return result[0] || null; // return first user or null if not found
        });
    }
    // Update a user by ID
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db
                .update(User_1.users)
                .set(data)
                .where((0, drizzle_orm_1.eq)(User_1.users.id, id))
                .returning();
            return result[0] || null; // return first updated user or null
        });
    }
    // Delete a user by ID
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.delete(User_1.users).where((0, drizzle_orm_1.eq)(User_1.users.id, id));
            return { message: "User deleted successfully" };
        });
    }
}
exports.UserService = UserService;
// import {signupvalidation} from "../Validations/signupvalidation";
// import { loginvalidation} from "../Validations/loginvalidation";
// import {Request,Response} from "express";
// import {User} from "../models/User";
// import bcrypt from "bcrypt";
// export class Authcontroller {
//    signup = (async(req: Request, res: Response) =>{
//     const {error} = await signupvalidation(req.body);
//     if(error){
//         const errormessage = error.details.map((detail:{message:any}) => detail.message).join(",");
//         return res.status(400).json({message: errormessage});
//     }
//     const { name, email, password, role} = req.body;
//     const exists = await User.findOne({ email });
//     if (exists) {
//         return res.status(400).json({message: "User already exists"});
//     }
//     const hashedpassword = await bcrypt.hash(password , 10);
//     const newuser = new User({
//         name,
//         email,
//         role,
//         password: hashedpassword
//     });
//     await newuser.save();
//     const token = generateToken(newuser);
//     res.cookie("token", token,{
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "strict",
//         maxAge: 24* 60* 60*1000,
//     });
//      return res.status(201).json({
//         message: "User created successfully",
//         token,
//         user: {
//             id: newuser._id,
//             name: newuser.name, 
//             email: newuser.email,
//             role: newuser.role
//         }
//      });
//    });
//    login = (async(req: Request , res: Response) =>{
//       const {error} = await loginvalidation(req.body);
//       if(error){
//         return res.status(400).json({message: error.details[0].message});
//       }
//       const {email,password} = req.body;;
//       const user = await User.findOne({email});
//       if(!user){
//         return res.status(404).json({message: "User not found"});
//       }
//       const ispassword = await bcrypt.compare(password, user.password);
//       if(!ispassword){
//         return res.status(400).json({message: "Invalid credentials"});
//       }
//     const token = generatetoken()
//    })
