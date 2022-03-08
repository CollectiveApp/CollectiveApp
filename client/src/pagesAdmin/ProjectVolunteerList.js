import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function ProjectVolunteerList() {

const { id } = useParams()
const [project, setProject] = useState('');

const storedToken = localStorage.getItem('authToken')

// getting the specific project by ID from URL
useEffect(() => {
  axios.get(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` }})
  .then(response => {
      console.log(response)
      setProject(response.data)
    })
    .catch(err => console.log(err))
}, [])

if(project === '') {
  return <>No Applications so far...</>
}
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>E-Mail</th>
                <th>Phone</th>
                <th>Available from</th>
                <th>Available to</th>
                <th>Experience</th>
                <th>Tools</th>
                <th>Message</th>
              </tr>
            </thead>
            <hr/>
            <tbody>
            {project.volunteerApplications.map(application => {
              console.log('application', application)
              return (
              <>
              <tr key={application._id}>
                  <td>{application.firstName}</td>
                  <td>{application.lastName}</td>
                  <td>{application.street}, {application.zip} {application.city}</td>
                  <td>{application.email}</td>
                  <td>{application.phone}</td>
                  <td>{application.timeFrom}</td>
                  <td>{application.timeTo}</td>
                  <td>{application.experience}</td>
                  <td>{application.tools}</td>
                  <td>{application.personalMessage}</td>
              </tr>
              <hr/>
              </>
              )
            })}
            </tbody>
          </table>
      </div>
    </>
  )
}
