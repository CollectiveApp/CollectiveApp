import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function VolunteersFullList() {

const [volunteers, setVolunteers] = useState([]);

const storedToken = localStorage.getItem('authToken')

const getAllVolunteers = () => {
    axios.get('/api/volunteers', { headers: { Authorization: `Bearer ${storedToken}` }})
    .then(response => {
        console.log(response)
        setVolunteers(response.data)
        console.log('volunteers', response.data)
        console.log(volunteers)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {getAllVolunteers()}, [])

  if(volunteers === []) {
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
                <hr/>
              </thead>
              <tbody>
              {volunteers.map(volunteer => {
                return (
                <>
                <tr key={volunteer._id}>
                    <td>{volunteer.firstName}</td>
                    <td>{volunteer.lastName}</td>
                    <td>{volunteer.street}, {volunteer.zip} {volunteer.city}</td>
                    <td>{volunteer.email}</td>
                    <td>{volunteer.phone}</td>
                    <td>{volunteer.timeFrom}</td>
                    <td>{volunteer.timeTo}</td>
                    <td>{volunteer.experience}</td>
                    <td>{volunteer.tools}</td>
                    <td>{volunteer.personalMessage}</td>
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

