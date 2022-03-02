import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {

  // State of Projects
  const [projects, setProjects] = useState([])
  console.log(projects)

  // get all Projects from backend/server
  const getAllProjects = () => {
    //request to the local created api
    axios.get('http://localhost:5005/api/projects')
    .then(response => {
      console.log(response.data)
      //set the state of projects
      setProjects(response.data)
    })
  }
  useEffect(() => {
    getAllProjects()
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project =>
        <h1>{project.name}</h1>
      )}
    </div>
  )
}
