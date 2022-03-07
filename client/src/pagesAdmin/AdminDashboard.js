import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

  return (
    <>
    
        <h1>Welcome to your Dashboard!</h1>
        <div>
            <Navbar />
            
            <h1>Projects</h1>
            <div>
                <ProjectList />
            </div>
            
            <>
            <h1>Events</h1>
                <div>
                    <EventList />
                </div>
            </>
            <>
            <h1>Volunteers</h1>
                <div>
                   <Link to={'/behind-the-scences/volunteers/fullList'}>Volunteers Database</Link>
                </div>
            </>
        </div>
    </>
  )
}
