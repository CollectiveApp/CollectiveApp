import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'
import Navbar from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {

  return (
    <>
        <div className='dashboard-back'>
            <div>
                <Navbar />
            </div>
            <div className='dash-body'>
                <div className='dash-box'>
                    <div>
                        <ProjectList />
                    </div>
                </div>
                <div className='dash-box'>
                    <div>
                        <h3>Events</h3>
                    </div>
                    <div>
                        <EventList />
                    </div>
                </div>
                <div className='dash-box'>
                    <div>
                        <h1>Volunteers</h1>
                    </div>
                    <div>
                        <Link to={'/behind-the-scences/volunteers/fullList'}>Volunteers Database</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
