import React, { useState } from 'react'
import axios from 'axios'
// import the service file since we need it to send the data to the server (for file upload)
import service from '../api/service'

export default function CreateProject(props) {

const [projectName, setProjectName] = useState('')
const [projectLocation, setProjectLocation] = useState('')
const [projectStartDate, setProjectStartDate] = useState('')
const [projectEndDate, setProjectEndDate] = useState('')
const [projectDescription, setProjectDescription] = useState('')
const [projectImageUrl, setProjectImageUrl] = useState([]);

const handleSubmit = e => {
    e.preventDefault()
    // send the data from the state as a post request to the backend
	axios.post('/api/project/create', { 
        projectName,
        projectLocation,
        projectStartDate,
        projectEndDate,
        projectDescription,
        projectImageUrl
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
    setProjectImageUrl([])
    // actualize the projects rendered
    props.refreshProjects()
}

 // ******** this method handles just the file upload ********
 const handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append("projectImageUrl", e.target.files[0]);
    service
      .uploadImage(uploadData)
      .then(response => {
        setProjectImageUrl([response.secure_url, ...projectImageUrl]);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

    return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
            <h2>Fill out Data</h2>
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
        </div>
        {/* file upload img cloudinary */}
        <div>
            <h2>Upload images</h2>
            <input id="projectImages" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)}/>
        </div>
        <div>
            <input id="projectImages" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
        <div>
            <input id="projectImages" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
         <div>
            <input id="projectImages" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
        <button type='submit'>Create Project</button>
    </form>
  )
}
