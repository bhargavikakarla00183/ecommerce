import {signupvalidation} from "../Validations/signupvalidation";
import { loginvalidation} from "../Validations/loginvalidation";
import {Request,Response} from "express";
import {User} from "../models/User";
import bcrypt from "bcrypt";

export class Authcontroller {
   signup = (async(req: Request, res: Response) =>{
    const {error} = await signupvalidation(req.body);
    if(error){
        const errormessage = error.details.map((detail:{message:any}) => detail.message).join(",");
        return res.status(400).json({message: errormessage});
    }
    const { name, email, password, role} = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
        return res.status(400).json({message: "User already exists"});
    }
    const hashedpassword = await bcrypt.hash(password , 10);
    const newuser = new User({
        name,
        email,
        role,
        password: hashedpassword
    });
    await newuser.save();
    const token = generateToken(newuser);
    res.cookie("token", token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24* 60* 60*1000,
    });
     return res.status(201).json({
        message: "User created successfully",
        token,
        user: {
            id: newuser._id,
            name: newuser.name, 
            email: newuser.email,
            role: newuser.role
        }
     });
   });
  
   login = (async(req: Request , res: Response) =>{
      const {error} = await loginvalidation(req.body);
      if(error){
        return res.status(400).json({message: error.details[0].message});
      }
      const {email,password} = req.body;;
      const user = await User.findOne({email});
      if(!user){
        return res.status(404).json({message: "User not found"});
      }
      const ispassword = await bcrypt.compare(password, user.password);
      if(!ispassword){
        return res.status(400).json({message: "Invalid credentials"});
      }
    const token = generatetoken()











   })




















}