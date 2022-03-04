import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateProject from './CreateProject'
import PopUpEditProject from './PopUpEditProject'
import EditProject from '../pagesAdmin/EditProject'


export default function ProjectList(props){
// State of Projects
const [projects, setProjects] = useState([])
const [showCreateProject, setShowCreateProject] = useState(false)
const [showPopUp, setShowPopUp] = useState(false)

const storedToken = localStorage.getItem('authToken')
// Handle PopUp
const togglePopUp = () => {setShowPopUp(!showPopUp)}
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
                  <CreateProject refreshProjects={getAllProjects} />
                )}
      
        {projects.map(project =>
                <div key={project._id}>
                  <h1>{project.projectName}</h1>
                  <button onClick={togglePopUp}>Edit PopUp</button>
                    {showPopUp && <PopUpEditProject
                    content={<EditProject />}
                    handleClose={togglePopUp}/>
                    }
                  <button><Link to={`/behind-the-scences/project/edit/${project._id}`}>Edit this Project</Link></button>
                  <button onClick={()=>{
                    axios.delete(`/api/project/${project._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedProject', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllProjects();
                        })
                      .catch(err => console.log(err))
                  }}>Delete this Project</button>
                </div>
                )}
      </>
    )  
}