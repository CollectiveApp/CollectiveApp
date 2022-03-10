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

            <div className='dash-vol-box'>    
                <Link className='nav-link' to={'/behind-the-scences/volunteers/fullList'}>Check the volunteers Database</Link>               
            </div>

            <div className='dash-body'>
                <div className='dash-box'>    
                    <ProjectList />
                </div>
                <div className='dash-box'>
                    <EventList />
                </div>
            </div>
        </div>
    </>
  )
}
