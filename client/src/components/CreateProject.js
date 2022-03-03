import React, {useState} from 'react'

export default function CreateProject() {

const [projectName, setProjectName] = useState('')
const [projectLocation, setProjectLocation] = useState('')
const [projectStartDate, setProjectStartDate] = useState('')
const [projectEndDate, setProjectEndDate] = useState('')
const [projectDescription, setProjectDescription] = useState('')

  return (
    <>
    <div>CreateProject</div>
    <form>
        <label>Name: </label>
        <input type="text" value={projectName}></input>
        <label>Location: </label>
        <input type="text" value={projectLocation}></input>
        <label>Project Start: </label>
        <input type="text" value={projectStartDate}></input>
        <label>Project End: </label>
        <input type="text" value={projectEndDate}></input>
        <label>Project Description: </label>
        <input type="text" value={projectDescription}></input>
        {/* file upload img cloudinary */}
        <button type='submit'>Create Project</button>
    </form>
    </>
  )
}
