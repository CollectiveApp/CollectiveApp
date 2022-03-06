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
  axios.get('/api/project/', { headers: { Authorization: `Bearer ${storedToken}` } })
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
        {projects.map(project => {
            return (
                <div key={project._id}>
                  <h1>{project.projectName}</h1>
                  <h3>{project.projectLocation}</h3>
                  <h3>{project.projectStartDate}</h3>
                  <h3>{project.projectEndDate}</h3>
                  <Link to={`/projects/${project._id}`}>Details & Volunteer</Link>
                </div>
            )
        })
        }
      </>
    )
}