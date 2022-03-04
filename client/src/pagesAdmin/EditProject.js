import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditProject() {
  // States
  const [projectName, setProjectName] = useState('')
  
  // take id from Params to query for specific element from db to edit it
  const { id } = useParams()
  // console.log(id)

  // where to change the data gained from edit
  const handleEdit = e => {
    e.preventDefault()
		const requestBody = { projectName }
		axios.put(`/api/project/${id}`, requestBody)
			.then(() => {
				// this redirects using react router
				// navigate(`/projects/${id}`)
			})
			.catch(err => console.log(err))
	}
  
  const storedToken = localStorage.getItem('authToken')

  // get specific project from backend to edit it
  const getProjectToEdit = () =>{
		axios.get(`/api/project/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				const { projectName } = response.data
        console.log('response.data', response.data)
          setProjectName(projectName)
			})
			.catch(err => console.log(err))
  }
  // use the Project that we got from API
  useEffect(() => {getProjectToEdit()}, [])

  return (
    <>
       <div>EditProject</div>
       <form>
         <label>Project Name: </label>
         <input type="text" value={projectName} onChange={handleEdit}/>
         <button type='submit'>Save Changes</button>
       </form>
    </>
  )
}
