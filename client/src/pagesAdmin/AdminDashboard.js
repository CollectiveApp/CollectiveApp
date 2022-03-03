import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <>
        <h1>Welcome to your Dashboard!</h1>
        <div>
            <div>
                <h1>Projects</h1>
                <Link to={'/behind-the-scences/projects/create'}>Create new Project</Link>
                {/* map over projects and return divs */}
                <div>
                    <Link to={'/behind-the-scences/project/edit/:id'}>Edit</Link>
                    <Link to={'/behind-the-scences/project/delete/:id'}>Delete</Link>
                </div>
            </div>
            <div>
                <h1>Events</h1>
                <Link to={'/behind-the-scences/event/create'}>Create new Event</Link>
                {/* map over events and return divs */}
                <div>
                    <Link to={'/behind-the-scences/event/edit/:id'}>Edit</Link>
                    <Link to={'/behind-the-scences/event/delete/:id'}>Delete</Link>
                </div>
            </div>
        </div>
    </>
  )
}
