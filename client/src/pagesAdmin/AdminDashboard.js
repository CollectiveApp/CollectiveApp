import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CreateProject from '../components/CreateProject'
import CreateEvent from '../components/CreateEvent'

export default function AdminDashboard() {

const [projects, setProjects] = useState([])
const [events, setEvents] = useState([])
const [showCreateProject, setShowCreateProject] = useState(false)
const [showCreateEvent, setShowCreateEvent] = useState(false)


const storedToken = localStorage.getItem('authToken')

const { id } = useParams()
const navigate = useNavigate()

// Handler
const deleteProject = () => {
    axios.delete(`/api/projects/${id}`)
        .then(() => {
            // redirect to the project list
            navigate('/projects')
        })
        .catch(err => console.log(err))
}

const handleSubmit = e => {
    e.preventDeafault()
    // send the data from the state as a post request to the backend
		axios.post('/api/projects', {})
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
    // reset the form
    setTitle('')
    setDescription('')
    // refresh the list of the projects in ProjectList
    props.refreshProjects()
}

// get all the projects from the backend / server
const getAllProjects = () => {
    // request 'api/projects'
    // for every request to a project route we need to also send the token
    axios.get('/api/projects', { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(response => {
            console.log(response.data)
            // set the state of projects
            setProjects(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}
useEffect(() => {
    getAllProjects()
}, [])

const getAllEvents = () => {
    // request 'api/events'
    // for every request to a project route we need to also send the token
    axios.get('/api/events', { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(response => {
            console.log(response.data)
            // set the state of projects
            setEvents(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}
useEffect(() => {
    getAllEvents()
}, [])

  return (
    <>
        <h1>Welcome to your Dashboard!</h1>
        <div>
            <>
                <h1>All the projects</h1>
                {projects.map(project => 
                    <>
                        <Link to={'/behind-the-scences/project/edit/:id'}>Edit</Link>
                        <button onClick={deleteProject}>Delete this project</button>
                    </>
                )}
                <button onClick={() => setShowCreateProject(!showCreateProject)}>Create Project</button>
                {showCreateProject && (
                    <CreateProject refreshProjects={getAllProjects} />
                )}
            </>

            <>
                <h1>All the Events</h1>
                {events.map(event => 
                                        <>
                                            <Link to={'/behind-the-scences/event/edit/:id'}>Edit</Link>
                                            {/* <button onClick={deleteProject}>Delete this project</button> */}
                                        </>
                )}
                <button onClick={() => setShowCreateEvent(!showCreateEvent)}>Create Event</button>
                {showCreateEvent && (
                    <CreateEvent refreshEvents={getAllEvents} />
                )}
            </>
        </div>
    </>
  )
}
