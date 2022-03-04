import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import EventList from '../components/EventList'

export default function AdminDashboard() {


const [events, setEvents] = useState([])
const [showCreateProject, setShowCreateProject] = useState(false)
const [showCreateEvent, setShowCreateEvent] = useState(false)


  return (
    <>
        <h1>Welcome to your Dashboard!</h1>
        <div>
            <>
            <h1>Projects</h1>
            <div>
                <ProjectList />
            </div>
            </>
            <>
            <h1>Events</h1>
                <div>
                    <EventList />
                </div>
            </>
        </div>
    </>
  )
}
