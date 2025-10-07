import { db } from "../db/pg"; // your Drizzle DB instance
import { users } from "../models/User";
import { eq } from "drizzle-orm"; // import eq for comparisons

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role?: "user" | "admin";
}

export class UserService {
  private db;

  constructor() {
    this.db = db; // assign the imported db instance
  }

  // Create a new user
  async createUser(input: CreateUserInput) {
    const result = await this.db
      .insert(users)
      .values(input)
      .returning();
    return result[0]; // return the first inserted user
  }

  // Get all users
  async getAllUsers() {
    return this.db.select().from(users);
  }

  // Get a user by ID
  async getUserById(id: number) {
    const result = await this.db
      .select()
      .from(users)
      .where(eq(users.id, id));
    return result[0] || null; // return first user or null if not found
  }

  // Update a user by ID
  async updateUser(id: number, data: Partial<CreateUserInput>) {
    const result = await this.db
      .update(users)
      .set(data)
      .where(eq(users.id, id))
      .returning();
    return result[0] || null; // return first updated user or null
  }

  // Delete a user by ID
  async deleteUser(id: number) {
    await this.db.delete(users).where(eq(users.id, id));
    return { message: "User deleted successfully" };
  }
}





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



