import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateProject from '../components/CreateProject'
import CreateEvent from '../components/CreateEvent'
import ProjectList from '../components/ProjectList'

export default function AdminDashboard() {

const [events, setEvents] = useState([])
const [showCreateEvent, setShowCreateEvent] = useState(false)

// const getAllEvents = () => {
//     // request 'api/events'
//     // for every request to a project route we need to also send the token
//     axios.get('/api/events', { headers: { Authorization: `Bearer ${storedToken}` } })
//         .then(response => {
//             console.log(response.data)
//             // set the state of projects
//             setEvents(response.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// useEffect(() => {getAllEvents()}, [])

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
                {events.map(event => 
                                        <>
                                            <Link to={'/behind-the-scences/event/edit/:id'}>Edit</Link>
                                            {/* <button onClick={deleteProject}>Delete this project</button> */}
                                        </>
                )}
                <button onClick={() => setShowCreateEvent(!showCreateEvent)}>Create Event</button>
                {showCreateEvent && (
                    {/* <CreateEvent refreshEvents={getAllEvents} /> */}
                )}
            </>
        </div>
    </>
  )
}
