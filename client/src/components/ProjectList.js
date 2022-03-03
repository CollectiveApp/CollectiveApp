import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function ProjectList(){
// State of Projects
const [projects, setProjects] = useState([])
console.log('projects', projects)

const storedToken = localStorage.getItem('authToken')
const navigate = useNavigate()

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
        {projects.map(project => 
                <div>
                  <h1>{project.projectName}</h1>
                  <Link to={'/behind-the-scences/project/edit/:id'}>Edit this Project</Link>
                  <button onClick={()=>{
                    axios.delete(`/api/project/${project._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then(deletedProject => {
      console.log('deletedProject', deleteProject)
      // redirect to the project list
      navigate('/behind-the-scences')
    })
    .catch(err => console.log(err))
                  }}>Delete this Project</button>
                </div>
                )}
      </>
    )  
}