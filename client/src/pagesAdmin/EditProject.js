import React, { useState, useEffect } from 'react'
import axios from 'axios'
import service from '../api/service'

export default function EditProject(props) {
  // States
  const [projectName, setProjectName] = useState('')
  const [projectLocation, setProjectLocation] = useState('')
  const [projectStartDate, setProjectStartDate] = useState('')
  const [projectEndDate, setProjectEndDate] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectSkillsNeeded, setProjectSkillsNeeded] = useState('')
  const [projectImageUrl, setProjectImageUrl] = useState([]);

  // where to change the data gained from edit
  const handleEdit = e => {
    e.preventDefault()
		const requestBody = { projectName, projectLocation, projectStartDate, projectEndDate, projectDescription, projectSkillsNeeded, projectImageUrl }
		axios.put(`/api/projects/${props.specificproject._id}`, requestBody)
			.then(() => {
        // actualize the projects rendered
        props.refreshProjects()
			})
			.catch(err => console.log(err))
	}
  // ******** this method handles just the file upload ********
 const handleFileUpload = e => {
  // console.log("The file to be uploaded is: ", e.target.files[0]);
  const uploadData = new FormData();
  uploadData.append("projectImageUrl", e.target.files[0]);
  service
    .uploadImage(uploadData)
    .then(response => {
      setProjectImageUrl([...projectImageUrl, response.secure_url]);
    })
    .catch(err => console.log("Error while uploading the file: ", err));
};
  
  const storedToken = localStorage.getItem('authToken')

  // get specific project from backend to edit it
  const getProjectToEdit = () => {
		axios.get(`/api/projects/${props.specificproject._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then(response => {
      console.log('axiosgetproject', response.data);	
        const { projectName } = response.data
        const { projectLocation } = response.data
        const { projectStartDate } = response.data
        const { projectEndDate } = response.data
        const { projectDescription } = response.data
        const { projectSkillsNeeded } = response.data
        const { projectImageUrl } = response.data
        // console.log('response.data.edit', response.data)
          setProjectName(projectName)
          setProjectLocation(projectLocation)
          setProjectStartDate(projectStartDate)
          setProjectEndDate(projectEndDate)
          setProjectDescription(projectDescription)
          setProjectSkillsNeeded(projectSkillsNeeded)
          setProjectImageUrl(projectImageUrl)
			})
			.catch(err => console.log(err))
  }
  // use the Project that we got from API
  useEffect(() => {getProjectToEdit()}, [])

  return (
    <>
       <div>EditProject</div>
       <form onSubmit={handleEdit}> 
        <label>Projectname: </label>
        <input id="projectName" type="text" value={projectName} onChange={e => setProjectName(e.target.value)}/>
        <label>Location: </label>
        <input id="projectLocation" type="text" value={projectLocation} onChange={e => setProjectLocation(e.target.value)}/>
        <label>Start Date: </label>
        <input id="projectStartDate" type="date" value={projectStartDate} onChange={e => setProjectStartDate(e.target.value)}/>
        <label>End Date: </label>
        <input id="projectEndDate" type="date" value={projectEndDate} onChange={e => setProjectEndDate(e.target.value)}/>
        <label>Description: </label>
        <input id="projectDescription" type="text" value={projectDescription} onChange={e => setProjectDescription(e.target.value)}/>
        <label>Looking For: </label>
        <input id="projectSkillsNeeded" type="text" value={projectSkillsNeeded} onChange={e => setProjectSkillsNeeded(e.target.value)}/>
        {/* file upload img cloudinary */}
        <div>
            <h2>Upload images</h2>
            <input id="projectImages" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)}/>
        </div>
        <button type='submit'>Save Changes</button>
       </form>
    </>
  )
}
