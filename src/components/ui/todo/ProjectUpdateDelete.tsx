"use client";

import { ProjectInterface } from "@/components/types/IProject";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteProject, editProject } from "@/components/services/project";
import { useSession } from "next-auth/react";
import { StatusTaskInterface } from "@/components/types/IStatusTask";

interface ProjectProps {
    project: ProjectInterface;
}

const ProjectHandle: React.FC<ProjectProps> = ({ project }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
    const [descriptionToEdit, setDescriptionToEdit] = useState<string>(project.Description);
    const [newProjectValue, setNewProjectValue] = useState<Partial<ProjectInterface>>({
        Title: project.Title,
        Description: project.Description,
        Status: project.Status,
        UserId: project.UserId
    });
    const [titleToEdit, setTitleToEdit] = useState<string>(project.Title)
    const [statusToEdit, setStatusToEdit] = useState<string>(project.Status)
    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editProject(newProjectValue);
        setOpenModalEdit(false);
        router.refresh();
    };

    const handleDeleteTask = async (id: string) => {
        await deleteProject(id);
        setOpenModalDeleted(false);
        router.refresh();
    };

    return (
        <tr key={project.Id}>
            <td className='w-full'>{project.Title}</td>
            <td className='w-full'>{project.Description}</td>
            <td className='w-full'>{project.Status}</td>
            <td className='flex gap-5'>
                <FiEdit
                    onClick={() => setOpenModalEdit(true)}
                    cursor='pointer'
                    className='text-blue-500'
                    size={25}
                />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEditTodo}>
                        <h3 className='font-bold text-lg'>Edit task</h3>
                        <div className='modal-action'>
                            <input
                                value={descriptionToEdit}
                                onChange={(e) => setDescriptionToEdit(e.target.value)}
                                type='text'
                                placeholder='Type Title here'
                                className='input input-bordered w-full'
                            />
                            <input
                                value={titleToEdit}
                                onChange={(e) => setTitleToEdit(e.target.value)}
                                type='text'
                                placeholder='Type Title here'
                                className='input input-bordered w-full'
                            />
                            <div className="modal-action ">
                                <select className="select select-info w-full"
                                    value={statusToEdit}
                                    onChange={(e) => { setStatusToEdit(e.target.value) }}
                                >
                                    <option value="Open">Open</option>
                                    <option value="InProgress">InProgress</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                            <button type='submit' className='btn'>
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal>
                <FiTrash2
                    onClick={() => setOpenModalDeleted(true)}
                    cursor='pointer'
                    className='text-red-500'
                    size={25}
                />
                <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
                    <h3 className='text-lg'>
                        Are you sure, you want to delete this task?
                    </h3>
                    <div className='modal-action'>
                        <button onClick={() => handleDeleteTask(project.Id)} className='btn'>
                            Yes
                        </button>
                    </div>
                </Modal>
            </td>
        </tr>
    );
};

export default ProjectHandle;