"use client";
import { signIn, useSession } from 'next-auth/react';
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { addProject } from "@/components/services/project";
import { ProjectInterface } from "@/components/types/IProject";
import { Input } from "../input";
import { StatusTaskInterface } from "@/components/types/IStatusTask";


const AddTask=({setRefresh}) => {
  function setStateRefresh(){
    setRefresh(true);
  }

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newProjectValue, setNewProjectValue] = useState<Partial<ProjectInterface>>({
    Title:"",
    Description:"",
    Status: StatusTaskInterface.Open
  });
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('Open')
  const { data: session } = useSession();
  const handleSubmitNewProject: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    newProjectValue.Title = title
    newProjectValue.Description = description
    if (status == "Open") {
      newProjectValue.Status = StatusTaskInterface.Open
    } else if (status == "InProgress") {
      newProjectValue.Status = StatusTaskInterface.InProgress
    } else if (status == "Urgent") {
      newProjectValue.Status = StatusTaskInterface.Urgent
    } else if (status == "Done") {
      newProjectValue.Status = StatusTaskInterface.Done
    }

    newProjectValue.UserId = session.user.id
      const user = session.user;
    console.log(newProjectValue)
    let res = await addProject(newProjectValue);
    if (res) {
      setModalOpen(false);
      setStateRefresh();
      toast.success("create project successful")
    
    } else {
      toast.error("create project unsuccessful");

    }

  };


  return (
    <div>
      <button
        id='create-list'
        onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full'
      >
        Add new Project <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewProject}>
          <div><Toaster /></div>
          <div className="grid w-full items-center gap-1.5 text-black">
            <h3 className='font-bold text-lg'>Add new Project</h3>
            <div className='modal-action'>
              <Input
              id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                placeholder='titel'
                className='input input-bordered w-full '
                style={{ color: 'black' }}
              />

            </div>
            <div className='modal-action'>
              <Input
              id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                placeholder='Description'
                className='input input-bordered w-full'
                style={{ color: 'black' }}
              />

            </div>
            <div className="modal-action ">
              <select className="select select-info w-full"
              id='status'
                value={status}
                onChange={(e) => { setStatus(e.target.value) }}
              >
                <option value="Open">Open</option>
                <option value="InProgress">InProgress</option>
                <option value="Urgent">Urgent</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <button id='submit-create-list-btn' type='submit' className='btn modal-action w-1/6'>
              Submit
            </button>

            {/* </div> */}

          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;