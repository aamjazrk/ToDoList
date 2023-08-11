import { UserInterface } from "./IUser";
export type ProjectInterface = {
    Id: string;
    Title: string;
    Description: string;
    Status: string;
    UserId: string;
    Users: UserInterface;
  
  }