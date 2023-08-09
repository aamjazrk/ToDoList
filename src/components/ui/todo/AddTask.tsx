"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
// import { addTodo } from "@/api";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { addProject } from "@/components/services/project";
import { ProjectInterface } from "@/components/types/IProject";

import { Input } from "../input";
import { StatusTaskInterface } from "@/components/types/IStatusTask";
const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<ProjectInterface>();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<StatusTaskInterface>(StatusTaskInterface.Open)


  const handleSubmitNewProject: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    newTaskValue.Title = title
    newTaskValue.Description = description
    newTaskValue.Status = status
    let res = await addProject(newTaskValue);
    if (res) {
      setModalOpen(false);
      toast.success("create project successful")
      router.refresh();
    } else {
      toast.error(res.error);

    }

  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewProject}>
          <div><Toaster /></div>
          <div className="grid w-full items-center gap-1.5">
            <h3 className='font-bold text-lg'>Add new task</h3>
            <div className='modal-action'>
              <Input
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                placeholder='Description'
                className='input input-bordered w-full'
              />

            </div>
            <div className='modal-action'>
              <Input
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                placeholder='Description'
                className='input input-bordered w-full'
              />

            </div>
            <div className='items-center gap-1.5'>
            <button type='submit' className='btn '>
              Submit
            </button>
          </div>
          </div>
          

        </form>
      </Modal>
    </div>
  );
};

export default AddTask;