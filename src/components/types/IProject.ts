import { UserInterface } from "./IUser";
export type ProjectInterface = {
    Id: string;
    Title: string;
    Description: string;
    CreatedAt:Date;
    UpdatedAt:Date;
    Status: string;
    UserId: string;
  
  }