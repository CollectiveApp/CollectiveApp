import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EditProject(props) {
  // States
  const [projectName, setProjectName] = useState('')
  const [projectLocation, setProjectLocation] = useState('')
  const [projectStartDate, setProjectStartDate] = useState('')
  const [projectEndDate, setProjectEndDate] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  
  // console.log('specificprojectprops', props)
  // // // take id from Params to query for specific element from db to edit it
  // // const { id } = useParams()
  // // // console.log(id)

  // where to change the data gained from edit
  const handleEdit = e => {
    e.preventDefault()
		const requestBody = { projectName, projectLocation, projectStartDate, projectEndDate, projectDescription }
		axios.put(`/api/project/${props.specificproject._id}`, requestBody)
			.then(() => {
        // actualize the projects rendered
        props.refreshProjects()
			})
			.catch(err => console.log(err))
	}
  
  const storedToken = localStorage.getItem('authToken')

  // get specific project from backend to edit it
  const getProjectToEdit = () => {
		axios.get(`/api/project/${props.specificproject._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then(response => {
      console.log('axiosgetproject', response.data);	
        const { projectName } = response.data
        const { projectLocation } = response.data
        const { projectStartDate } = response.data
        const { projectEndDate } = response.data
        const { projectDescription } = response.data
        // console.log('response.data.edit', response.data)
          setProjectName(projectName)
          setProjectLocation(projectLocation)
          setProjectStartDate(projectStartDate)
          setProjectEndDate(projectEndDate)
          setProjectDescription(projectDescription)
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
         <button type='submit'>Save Changes</button>
       </form>
    </>
  )
}
