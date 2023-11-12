import { UserInterface } from "../models/UserInterface";

// services/userService.ts
export const findUserByEmailAndPassword = (users: UserInterface[], username: string, password: string): UserInterface | null => {
  return users.find(user => user.username === username && user.password === password) || null;
};

export const findUserById = (users: UserInterface[], id: number): UserInterface | null => {
  return users.find(user => user.id === id) || null;
}