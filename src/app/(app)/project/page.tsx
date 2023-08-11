'use client'
import ProjectHandle from "@/components/ui/todo/ProjectUpdateDelete";
import { getAllbyUser } from "@/components/services/project";
import { ProjectInterface } from "@/components/types/IProject";
import AddTask from "@/components/ui/todo/AddTask";
import ProjectList from "@/components/ui/todo/ProjectList";
import React, { useState, useEffect } from 'react'
export default function Project() {
  // const [id, setId] = useState('')
  const [project, setProject] = useState<ProjectInterface[]>([])
  const getProject = async () => {
    let id = localStorage.getItem('id');
    let res = await getAllbyUser(id);
    console.log(res);
    if (res) {
      setProject(res);
      console.log('check project set:', project)
    }

  };
  useEffect(() => {
    getProject()

  }, []);



  return (
    <main className='max-w-4xl mx-auto mt-20'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask />
      </div >
      <ProjectList tasks={project} />
    </main>

  )
}