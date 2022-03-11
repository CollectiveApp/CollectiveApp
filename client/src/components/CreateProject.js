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
const [projectSkillsNeeded, setProjectSkillsNeeded] = useState('')
const [projectImageUrls, setProjectImageUrls] = useState([]);

const handleSubmit = e => {
    e.preventDefault()
    // send the data from the state as a post request to the backend
    const requestBody = { 
        projectName,
        projectLocation,
        projectStartDate,
        projectEndDate,
        projectDescription,
        projectSkillsNeeded,
        projectImageUrls
     }
     console.log('requestBody', requestBody)

	axios.post('/api/projects/create', requestBody)
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
    setProjectSkillsNeeded('')
    setProjectImageUrls([])
    // actualize the projects rendered
    props.refreshProjects()
}

 // ******** this method handles just the file upload ********
 const handleFileUpload = e => {
    const uploadData = new FormData();
    const uploadedFiles = [...e.target.files]

    console.log(uploadedFiles)
    console.log(e.target.files[0])
    
    uploadedFiles.map(file  => {
    console.log(file)
    uploadData.append("projectImageUrls", file);
    service
      .uploadImage(uploadData)
      .then(response => {
          console.log('response.secure_url', response.secure_url)
        setProjectImageUrls([...response.secure_url, ...projectImageUrls]);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
    })
  };

    return (
    <>
        <h2>Create a new Project</h2>
    <form className="popUp-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="popUp-container">
        <label className='label-popUp'>Name</label>
        <input className="inputfield" id="projectName" name="projectName"  type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
        <label className='label-popUp'>Location</label>
        <input className="inputfield" id="projectLocation" name="projectLocation"  type="text" value={projectLocation} onChange={e => setProjectLocation(e.target.value)}></input>
        <label className='label-popUp'>Project Start</label>
        <input className="inputfield date-input" id="projectStartDate" name="projectStartDate"  type="date" value={projectStartDate} onChange={e => setProjectStartDate(e.target.value)}></input>
        <label className='label-popUp'>Project End</label>
        <input className="inputfield date-input" id="projectEndDate" name="projectEndDate" type="date" value={projectEndDate} onChange={e => setProjectEndDate(e.target.value)}></input>
        <label className='label-popUp'>Project Description</label>
        <input className="inputfield" id="projectDescription" name="projectDescription" type="text" value={projectDescription} onChange={e => setProjectDescription(e.target.value)}></input>
        <label className='label-popUp'>Looking for Volunteers</label>
        <input className="inputfield" id="projectSkillsNeeded" name="projectSkillsNeeded" type="text" value={projectSkillsNeeded} onChange={e => setProjectSkillsNeeded(e.target.value)}></input>
      {/* file upload img cloudinary */}
      <div>
        <h2>Upload images</h2>
        <input className="inputfield" id="projectImages" name="projectImageUrls" type="file" onChange={(e) => handleFileUpload(e)} multiple/>
      </div>
      </div>
        <button className="popUp-btn" type='submit'>+</button>
    </form>
    </>
  )
}
