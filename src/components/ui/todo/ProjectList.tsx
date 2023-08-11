import { ProjectInterface } from "@/components/types/IProject";
import React from "react";
import ProjectHandle from "./ProjectUpdateDelete";

interface TodoListProps {
  tasks: ProjectInterface[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <ProjectHandle key={task.Id} project={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;