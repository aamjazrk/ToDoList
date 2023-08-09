import { UserInterface } from "./IUser";

export interface NotebookInterface{
    Id?: String;
    Title?: String;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    Text?: String;
    Users?: UserInterface;
    UserId?: String;
}