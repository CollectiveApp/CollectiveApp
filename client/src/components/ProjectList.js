import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PopUpEditProject from './PopUpEditProject'
import PopUpCreateProject from './PopUpCreateProject'


export default function ProjectList(props){
// State of Projects
const [projects, setProjects] = useState([])
const [showCreateProject, setShowCreateProject] = useState(false)
const [projectToBeEdited, setProjectToBeEdited] = useState(null)

const storedToken = localStorage.getItem('authToken')
// Handle PopUp
const handleProjectToBeEdited = project => {
  console.log('project', project)
  setProjectToBeEdited(project)}

// get all projects from the backend
const getAllProjects = () => {
  // request 'api/projects'
  // for every request to a project route we need to also send the token
  axios.get('/api/project/', { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
          console.log('response.data',response.data)
          // set the state of projects
          setProjects(response.data)
      })
      .catch(err => {
          console.log(err)
      })
}
useEffect(() => {getAllProjects()}, [])

    return(
      <>
      <button onClick={() => setShowCreateProject(!showCreateProject)}>Create Project</button>
                {showCreateProject && (
                  <PopUpCreateProject refreshProjects={getAllProjects} handleClose={() => setShowCreateProject(false)}/>
                )}
      
        {projects.map(project => {
                return (
                <div key={project._id}>
                  <h1>{project.projectName}</h1>
                  <button onClick={() => {handleProjectToBeEdited(project)}}>Edit</button>
                    {projectToBeEdited && <PopUpEditProject
                    handleClose={() => {setProjectToBeEdited(null)}} thisproject={projectToBeEdited} refreshProjects={getAllProjects}/>
                    }
                  <button onClick={()=>{
                    axios.delete(`/api/project/${project._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedProject', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllProjects();
                        })
                      .catch(err => console.log(err))
                  }}>Delete</button>
                </div>
                )}
                )}
      </>
    )  
}