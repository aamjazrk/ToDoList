import { UserInterface } from "./IUser";
export type ProjectInterface = {
    Id: String;
    Title: String;
    Description: String;
    Status: String;
    UserId: String;
    Users: UserInterface;
  
  }