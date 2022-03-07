import React from 'react'
import ProjectListVisitor from '../components/ProjectListVisitor'
import EventNavbar from '../components/EventNavbar'

export default function Projects() {


  return (
    <div>
      <div>
        <EventNavbar />
      </div>
      <div>
        <ProjectListVisitor />
      </div>
    </div>
  )
}
