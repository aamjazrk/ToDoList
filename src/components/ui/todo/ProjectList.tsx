import { ProjectInterface } from "@/components/types/IProject";
import React from "react";
import ProjectHandle from "./ProjectUpdateDelete";
import DataTable from "react-data-table-component";

interface TodoListProps {
  tasks: ProjectInterface[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const columns = [
    {
      name:'Title',
      selector: row =>  row.name
    },
    {
      name:'Description',
      selector: row => row.Description
    }
  ]
  return (
    <div className='overflow-x-auto'>
      <DataTable columns={columns}
      data={tasks}
      ></DataTable>
      {/* <table className='table w-full'>

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
      </table> */}
    </div>
  );
};

export default TodoList;