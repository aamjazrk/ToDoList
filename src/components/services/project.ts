
import { ProjectInterface } from "@/components/types/IProject";

const baseUrl = 'http://localhost:3000';

export const getAllbyUser = async (id:string) => {
    const res = await fetch(`${baseUrl}/api/project/getbyuser/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const Projects = await res.json();
    return Projects;
}

export const addProject = async (project: Partial<ProjectInterface>) => {
    const res = await fetch(`${baseUrl}/api/project/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    const newProject = await res.json();
    return newProject;
}

export const editProject = async (project: Partial<ProjectInterface>) => {
    const res = await fetch(`${baseUrl}/api/project/update/${project.Id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
    const updatedProject = await res.json();
    return updatedProject;
}

export const deleteProject = async (id: string) => {
    const res = await fetch(`${baseUrl}/api/project/delete/${id}`, {
        method: 'DELETE',
    })
    const deleteProject = await res.json();
    return deleteProject
}