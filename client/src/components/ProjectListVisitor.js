import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ProjectListVisitor(){
// State of Projects
const [projects, setProjects] = useState([])

const storedToken = localStorage.getItem('authToken')

// get all projects from the backend
const getAllProjects = () => {
  // request 'api/projects'
  // for every request to a project route we need to also send the token
  axios.get('/api/projects/', { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
          // log response from db
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
        <div className='bg-overlay'> 
        <div className='heading-project-container'><h1>UPCOMING PROJECTS</h1></div>
        <div className='project-container'>
        {projects.map(project => {
            return (
                <div key={project._id}>
                  <h1 className='projectTitle'>{project.projectName}</h1>
                  <h2 className='project-text'>{project.projectLocation}</h2>
                  <h3 className='project-text'>{project.projectStartDate} - {project.projectEndDate}</h3>
                  <Link className="project-link" to={`/projects/${project._id}`}>Details & Volunteer</Link>
                  <hr></hr>
                </div>
            )
        })
        }
        </div>
        </div>  
      </>
    )
}