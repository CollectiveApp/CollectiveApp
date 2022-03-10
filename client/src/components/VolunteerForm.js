import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function VolunteerForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const [experience, setExperience] = useState('');
    const [hasTools, setHasTools] = useState(false)
    const [tools, setTools] = useState('');
    const [personalMessage, setPersonalMessage] = useState('');
    const [projectAppliedFor, setProjectAppliedFor] = useState('');

    // save id to assign it to projectAppliedFor
    const { id } = useParams()

    const handleSubmit = e => {
        e.preventDefault()
        // send the data from the state as a post request to the backend 
        axios.post('/api/volunteers/create', { 
            firstName,
            lastName,
            street,
            city,
            zip,
            email,
            phone,
            timeFrom,
            timeTo,
            experience,
            hasTools,
            tools,
            personalMessage,
            projectAppliedFor: id
         })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
        // reset the state
            setFirstName('')
            setLastName('')
            setStreet('')
            setCity('')
            setZip('')
            setEmail('')
            setPhone('')
            setTimeFrom('')
            setTimeTo('')
            setExperience('')
            setHasTools(false)
            setTools('')
            setPersonalMessage('')
            setProjectAppliedFor('')
    }

  return (
  <> 
    <div className='page-container bg-overlay-volunteer'>
    <div className='heading-volunteer-container'><h1>Become a volunteer</h1></div>
    <div className='project-container-volunteer'>
    <form className='volunteer-form' onSubmit={handleSubmit}>
            <div className='inputfield-container'>
            <label className='label-form'>Name: </label>
                <input className='inputfield' id="firstName" name="firstName"  type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input className='inputfield' id="lastName" name="lastName"  type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
            <label className='label-form'>Address: </label>
                <input className='inputfield' id="street" name="street"  type="text" placeholder='Street and Nr.' value={street} onChange={e => setStreet(e.target.value)}/>
                <input className='inputfield' id="zip" name="zip"  type="number" placeholder='Zip Code' value={zip} onChange={e => setZip(e.target.value)}/>
                <input className='inputfield' id="city" name="city"  type="text" placeholder='City' value={city} onChange={e => setCity(e.target.value)}/>
            <label className='label-form'>Contact: </label>
                <input className='inputfield' id="email" name="email"  type="email" placeholder='E-Mail' value={email} onChange={e => setEmail(e.target.value)}/>
                <input className='inputfield' id="phone" name="phone"  type="number" placeholder='Phone' value={phone} onChange={e => setPhone(e.target.value)}/>
            <label className='label-form'>From when to when do you have time? </label>
                <input className='inputfield' id="timeFrom" name="timeFrom" type="date" placeholder='Can join from...' value={timeFrom} onChange={e => setTimeFrom(e.target.value)}/>
                <input className='inputfield' id="timeTo" name="timeTo" type="date" placeholder='...until' value={timeTo} onChange={e => setTimeTo(e.target.value)}/>
            <label className='label-form'>With what are you experienced? Any special skills? </label>
                <input className='inputfield' id="experience" name="experience" type="text" placeholder='Experience' value={experience} onChange={e => setExperience(e.target.value)}/>
            <label className='label-form'>Can you bring tools? </label>
            <div className='checkbox-container'>
                <input className='checkbox' id="hasTools" name="hasTools" type="checkbox" value={hasTools} onChange={e => setHasTools(e.target.checked)}/> Yes
                <input className='checkbox' name="no" type="checkbox"/> No
            </div>
            {hasTools && <label className='label-form'>Which ones? </label>
                }
            {hasTools && 
                <input className='inputfield' id="tools" name="tools" type="text" placeholder='Tools' value={tools} onChange={e => setTools(e.target.value)}/>
            }
            <label className='label-form'>Leave us a message</label>
                <input className='inputfield-message' id="personalMessage" name="personalMessage" type="text" placeholder='Something you wanna tell us?' value={personalMessage} onChange={e => setPersonalMessage(e.target.value)}/>
            <button className='btn-form' type='submit'>Apply to Volunteer</button>
        </div>
    </form>
    </div>
    </div>
  </>  
  )
}
