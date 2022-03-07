import React from 'react'
import ProjectListVisitor from '../components/ProjectListVisitor'
import NavBar from '../components/NavBar'

export default function Projects() {


  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ProjectListVisitor />
      </div>
    </div>
  )
}
