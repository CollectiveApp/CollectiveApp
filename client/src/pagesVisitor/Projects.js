import React from 'react'
import ProjectListVisitor from '../components/ProjectListVisitor'
import EventNavbar from '../components/EventNAvbar'

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
