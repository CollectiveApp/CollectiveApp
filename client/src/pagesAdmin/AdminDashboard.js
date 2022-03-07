import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'
import Navbar from '../components/NavBar'

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
                   <button>Full Database</button>
                </div>
            </>
        </div>
    </>
  )
}
