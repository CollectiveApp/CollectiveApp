import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import VolunteersProjectSearchBar from '../components/VolunteersProjectSearchBar';
import VolunteerToggle from '../components/VolunteerToggle';

export default function ProjectVolunteerList() {

const { id } = useParams();
const [project, setProject] = useState('');
const [toggle, setToggle] = useState(false)
const [search, setSearch] = useState('');

const storedToken = localStorage.getItem('authToken')

// getting specific project from db
useEffect(() => {
  axios.get(`/api/projects/${id}`, { headers: { Authorization: `Bearer ${storedToken}` }})
    .then(response => {
      // console.log(response.data)
      setProject(response.data)
    })
    .catch(err => console.log(err))
}, [])


if(project === '') {
  return <>No Applications so far...</>
}
  // filtering firstName and lastName by Search-Input 
  let filteredApplications = project.volunteerApplications.filter(application => {
    if(application.firstName.toLowerCase().includes(search.toLowerCase()) || application.lastName.toLowerCase().includes(search.toLowerCase())){
      return application
    }
  })
  // toggle checkbos to get appl. with tools
  if(toggle){
    filteredApplications = filteredApplications.filter(application => {
      return application.hasTools === true
   })
  }

  return (
    <>
    <VolunteersProjectSearchBar project={project} setSearch={setSearch} search={search}/>
    <VolunteerToggle setToggle={setToggle}/>
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
                <th>Has Tools</th>
                <th>Tools</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
            {filteredApplications.map(application => {
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
                  <td>{application.hasTools && 'X'}</td>
                  <td>{application.tools}</td>
                  <td>{application.personalMessage}</td>
              </tr>
              </>
              )
            })}
            </tbody>
          </table>
      </div>
    </>
  )
}
