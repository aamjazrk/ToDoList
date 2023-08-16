import { ProjectInterface } from "@/components/types/IProject";
import React, { useEffect, useState } from "react";
import { FormEventHandler } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import {} from "react";
import { deleteProject, editProject } from "@/components/services/project";
import { StatusTaskInterface } from "@/components/types/IStatusTask";

interface TodoListProps {
  tasks: ProjectInterface[];
  setRefresh;
}
const TodoList: React.FC<TodoListProps> = ({ tasks, setRefresh }) => {
  function setStateRefresh() {
    setRefresh(true);
  }
  const handleDeleteTask = async (id: string) => {
    let res = await deleteProject(id);
    if (res) {
      setOpenModalDeleted(false);
      setTaskIdToDelete("");
      setStateRefresh();
    } 
  };

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    newProjectValue.Description = descriptionToEdit;
    newProjectValue.Title = titleToEdit;
    if (statusToEdit == "Open") {
      newProjectValue.Status = StatusTaskInterface.Open;
    } else if (statusToEdit == "InProgress") {
      newProjectValue.Status = StatusTaskInterface.InProgress;
    } else if (statusToEdit == "Urgent") {
      newProjectValue.Status = StatusTaskInterface.Urgent;
    } else if (statusToEdit == "Done") {
      newProjectValue.Status = StatusTaskInterface.Done;
    }
    let res = await editProject(newProjectValue);
    setOpenModalEdit(false);
    if (res) {
      toast.success("update project successful");
    } else {
      toast.error(res.error);
    }
  };

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [descriptionToEdit, setDescriptionToEdit] = useState<string>("");
  const [newProjectValue, setNewProjectValue] = useState<
    Partial<ProjectInterface>
  >({});
  const [titleToEdit, setTitleToEdit] = useState<string>("");
  const [statusToEdit, setStatusToEdit] = useState<string>("");
  const [taskIdToDelete, setTaskIdToDelete] = useState<string>("");

  return (
    <div className="overflow-x-auto">
      <div><Toaster/></div>
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {tasks.map((project) => (
          // <ProjectHandle key={tasks} project={project} />
          <div id="body" key={project.Id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{project.Title}</h2>
            <p className="text-gray-600">{project.Description}</p>
            <p className="text-gray-600">Status: {project.Status}</p>
            <div className="grid"></div>
            <div className="flex gap-4 justify-end">
              <FiEdit
                onClick={() => {
                  setOpenModalEdit(true);
                  setNewProjectValue(project);
                  setStatusToEdit(project.Status);
                  setDescriptionToEdit(project.Description);
                  setTitleToEdit(project.Title);
                }}
                cursor="pointer"
                className="text-blue-500"
                size={25}
                id={`edit-button-${project.Title}`}
              />
              <FiTrash2
                onClick={() => {
                  setOpenModalDeleted(true);
                  setTaskIdToDelete(project.Id);
                }}
                data-cy={`delete-button-${project.Title}`}
                id={`delete-button-${project.Title}`}
                cursor="pointer"
                className="text-red-500"
                size={25}
              />
            </div>
            <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit} >
              <form onSubmit={handleSubmitEditTodo}  >
                <h3 className="font-bold text-lg">Edit task</h3>
                <div className="modal-action ">
                  <input
                    value={titleToEdit}
                    onChange={(e) => setTitleToEdit(e.target.value)}
                    type="text"
                    placeholder="Type Title here"
                    className="input input-bordered w-full "
                    id={`title-edit-${project.Title}`}
                  />
                  <input
                    value={descriptionToEdit}
                    onChange={(e) => setDescriptionToEdit(e.target.value)}
                    type="text"
                    placeholder="Type Description here"
                    className="input input-bordered w-full"
                    id= {`description-edit-${project.Title}`}
                  />
                  <select
                    className="select select-info w-24"
                    value={statusToEdit}
                    onChange={(e) => {
                      setStatusToEdit(e.target.value);
                    }}
                    id={`status-edit-${project.Title}`}
                  >
                    <option value="Open" selected={statusToEdit == "Open"}>
                      Open
                    </option>
                    <option
                      value="InProgress"
                      selected={statusToEdit == "InProgress"}
                    >
                      InProgress
                    </option>
                    <option value="Urgent" selected={statusToEdit == "Urgent"}>
                      Urgent
                    </option>
                    <option value="Done" selected={statusToEdit == "Done"}>
                      Done
                    </option>
                  </select>
                  <button id={`edit-submit-${project.Title}`} type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </Modal>

            <Modal
              modalOpen={openModalDeleted}
              setModalOpen={setOpenModalDeleted}
            >
              <h3 className="text-lg">
                Are you sure, you want to delete this task?
              </h3>
              <div className="modal-action">
                <button
                  onClick={() => handleDeleteTask(taskIdToDelete)}
                  className="btn"
                  id={`confirm-delete-${project.Title}`}
                  data-cy="confirm-delete"
                >
                  Yes
                </button>
              </div>
            </Modal>
          </div>
        ))}
        <></>
      </div>
    </div>
  );
};

export default TodoList;
