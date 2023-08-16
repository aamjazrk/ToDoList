'use client'

import { getAllbyUser } from "@/components/services/project";
import { ProjectInterface } from "@/components/types/IProject";
import AddTask from "@/components/ui/todo/AddTask";
import ProjectList from "@/components/ui/todo/ProjectList";
import DataTable from "react-data-table-component";
import React, { useState, useEffect } from 'react'
export default function Project() {
  const [projects, setProject] = useState<ProjectInterface[]>([])
  const [checkrefresh,setCheckRefresh] = useState<Boolean>(false)
  const getProject = async () => {
    let id = localStorage.getItem('id');
    let res = await getAllbyUser(id);
    console.log(res);
    console.log(res); // Log the fetched data
    if (Array.isArray(res.project)) {
      setProject(res.project);
    
      console.log('Fetched projects array:', projects);
    }

  };
  useEffect(() => {
    getProject();
    setCheckRefresh(false)

  }, [checkrefresh]);


  return (
    <main className='max-w-4xl mx-auto mt-20'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <AddTask setRefresh={setCheckRefresh}/>
      </div >
      <ProjectList tasks={projects} setRefresh={setCheckRefresh} />
    </main>

  )
}
