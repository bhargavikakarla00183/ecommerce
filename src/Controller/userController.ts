import { Request, Response } from "express";
import { UserService, CreateUserInput } from "../Services/userservice";

const userService = new UserService();

export class UserController {
  // Create user
  async createUser(req: Request, res: Response) {
    try {
      const input: CreateUserInput = req.body;
      const user = await userService.createUser(input);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get all users
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Get user by ID
  async getUserById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = await userService.getUserById(id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Update user
  async updateUser(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
      const data = req.body;
      const updatedUser = await userService.updateUser(id, data);
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  // Delete user
  async deleteUser(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await userService.deleteUser(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
}