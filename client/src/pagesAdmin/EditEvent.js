import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import service from '../api/service'

export default function EditProject(props) {

	const [eventName, setEventName] = useState('');
	const [eventDescription, setEventDescription] = useState('');
  	const [eventDate, setEventDate] = useState('')
  	const [eventTime, setEventTime] = useState('')
  	const [eventType, setEventType] = useState('')
  	const [eventPicture, setEventPicture] = useState([])
  	const [eventLocation, setEventLocation] = useState('')
  	const [eventOutdoor, setEventOutdoor] = useState(false)
	
	const options = [
    	{label:'All', value:'all'},
        {label: 'Music', value: 'music' },
        {label: 'Food', value: 'food'},
        {label: 'Sports', value: 'sports' },
        {label: 'Arts', value: 'arts' },
        {label: 'Building', value: 'building' },
        {label: 'Meetups', value: 'meetups' },
        {label: 'Social Volunteer', value: 'social volunteer' },
    ]
  
  
	const { id } = useParams()
	

	const handleSubmit = e => {
		console.log()
		e.preventDefault()
		const requestBody = { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation, eventOutdoor }
		axios.put(`/api/event/${id}`, requestBody)
			.then(() => {
				props.refreshEvents()
			})
			.catch(err => console.log(err))
	}

	const handleFileUpload = e => {
		// console.log("The file to be uploaded is: ", e.target.files[0]);
		const uploadData = new FormData();
		uploadData.append("eventPicture", e.target.files[0]);
		service
		  .uploadImage(uploadData)
		  .then(response => {
			setEventPicture([...eventPicture, response.secure_url]);
		  })
		  .catch(err => console.log("Error while uploading the file: ", err));
	  };


	const storedToken = localStorage.getItem('authToken')

	const getEventToEdit = () => {
		axios.get(`/api/event/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
		.then(response =>{
			const { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation, eventOutdoor } = response.data
				setEventName(eventName)
				setEventDescription(eventDescription)
        		setEventDate(eventDate)
        		setEventTime(eventTime)
        		setEventType(eventType)
        		setEventPicture(eventPicture)
       			setEventLocation(eventLocation)
				setEventOutdoor(eventOutdoor)
		})
		.catch(err => console.log(err))
	}
	useEffect(() => { getEventToEdit()}, [])

	
    const handleCheckBox = e => setEventOutdoor(e.target.value)
	const handleEventType = e => setEventType(e.target.value)

	return (
		<>
			<div>Edit {eventName} event</div>
			<form onSubmit={handleSubmit} className="popUp-form" >
				<div className="popUp-container">
				<label className='label-popUp' htmlFor="eventName">Event name </label>
				<input
					className="inputfield"
					id="eventName"
					name='eventName'
					type="text"
					value={eventName}
					onChange={e => setEventName(e.target.value)}
				/>
				<label className='label-popUp' htmlFor="eventDescription">Description </label>
				<input
					className="inputfield"
					id="eventDescription"
					name='eventDescription'
					type="text"
					value={eventDescription}
					onChange={e => setEventDescription(e.target.value)}
				/>
        
        <label className='label-popUp' htmlFor="eventType"> Event Type
            <select value={eventType} onChange={handleEventType}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
        
        <label className='label-popUp' htmlFor="eventDate">Date </label>
				<input
					className="inputfield"
					id="eventDate"
					name='eventDate'
					type="date"
					value={eventDate}
					onChange={e => setEventDate(e.target.value)}
				/>
        <label className='label-popUp' htmlFor="eventTime">Time </label>
				<input
					className="inputfield"
					id="eventTime"
					name='eventTime'
					type="time"
					value={eventTime}
					onChange={e => setEventTime(e.target.value)}
				/>
        <label className='label-popUp' htmlFor="eventLocation">Location </label>
				<input
					className="inputfield"
					id="eventLocation"
					name='eventLocation'
					type="text"
					value={eventLocation}
					onChange={e => setEventLocation(e.target.value)}
				/>
		<div className='label-popUp'>
            Outdoor
            <input type="checkBox" value={eventOutdoor} name='outdoors' onChange={handleCheckBox}/>
        </div>
        <div>
            <h2>Upload images</h2>
            <input className="inputfield" id="eventPicture" name="imageUpload" type="file" onChange={(e) => handleFileUpload(e)}/>
        </div>
		</div>
				
				<button type="submit">Update this project</button>
			</form>
			
			
		</>

	)
}

