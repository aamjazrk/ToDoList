import { StatusTaskInterface } from "./IStatusTask";
import { ProjectInterface } from "./IProject";
export interface TodoInterface {
    Id?: Number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    Status?: StatusTaskInterface
    Color?: String;
    Index?: Number;

    Projects?: ProjectInterface;
    ProjectId?: String;

}