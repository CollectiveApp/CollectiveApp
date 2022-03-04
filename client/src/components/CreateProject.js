import React, { useState } from 'react'
import axios from 'axios'


export default function CreateProject(props) {

const [projectName, setProjectName] = useState('')
const [projectLocation, setProjectLocation] = useState('')
const [projectStartDate, setProjectStartDate] = useState('')
const [projectEndDate, setProjectEndDate] = useState('')
const [projectDescription, setProjectDescription] = useState('')

const handleSubmit = e => {
    e.preventDefault()
    // send the data from the state as a post request to the backend
	axios.post('/api/project/create', { 
        projectName,
        projectLocation,
        projectStartDate,
        projectEndDate,
        projectDescription
     })
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
    // reset the state
    setProjectName('')
    setProjectLocation('')
    setProjectStartDate('')
    setProjectEndDate('')
    setProjectDescription('')
    // actualize the projects rendered
    props.refreshProjects()
}

    return (
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input id="projectName" name="projectName"  type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
        <label>Location: </label>
        <input id="projectLocation" name="projectLocation"  type="text" value={projectLocation} onChange={e => setProjectLocation(e.target.value)}></input>
        <label>Project Start: </label>
        <input id="projectStartDate" name="projectStartDate"  type="date" value={projectStartDate} onChange={e => setProjectStartDate(e.target.value)}></input>
        <label>Project End: </label>
        <input id="projectEndDate" name="projectEndDate" type="date" value={projectEndDate} onChange={e => setProjectEndDate(e.target.value)}></input>
        <label>Project Description: </label>
        <input id="projectDescription" name="projectDescription" type="text" value={projectDescription} onChange={e => setProjectDescription(e.target.value)}></input>
        {/* file upload img cloudinary */}
        <button type='submit'>Create Project</button>
    </form>
  )
}
