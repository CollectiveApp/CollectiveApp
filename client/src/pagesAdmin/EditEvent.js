import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function EditProject() {

	const [eventName, setEventName] = useState('');
	const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventPicture, setEventPicture] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [outdoors, setOutdoors] = useState(false)
  
  
	const { id } = useParams()
	console.log('test')

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation }
		axios.put(`/api/events/${id}`, requestBody)
			.then(() => {
			})
			.catch(err => console.log(err))
	}

	const deleteEvent = () => {
		axios.delete(`/api/events/${id}`)
			.then(() => {
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		axios.get(`/api/events/${id}`)
			.then(response => {
				const { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation } = response.data
				setEventName(eventName)
				setEventDescription(eventDescription)
        setEventDate(eventDate)
        setEventTime(eventTime)
        setEventType(eventType)
        setEventPicture(eventPicture)
        setEventLocation(eventLocation)
		setOutdoors(false)
			})
			.catch(err => console.log(err))
	}, [])

	

    const handleCheckBox = e => setOutdoors(e.target.value)

	return (
		<>
			<h1>Edit this project</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="eventName">Event name </label>
				<input
					id="eventName"
					type="text"
					value={eventName}
					onChange={e => setEventName(e.target.value)}
				/>
				<label htmlFor="eventName">Description </label>
				<input
					id="eventDescription"
					type="text"
					value={eventDescription}
					onChange={e => setEventDescription(e.target.value)}
				/>
        <label htmlFor="eventName"> Type </label>
				<input
					id="eventType"
					type="text"
					value={eventType}
					onChange={e => setEventType(e.target.value)}
				/>
        <label htmlFor="eventName">Date </label>
				<input
					id="eventDate"
					type="text"
					value={eventDate}
					onChange={e => setEventDate(e.target.value)}
				/>
        <label htmlFor="eventName">Time </label>
				<input
					id="eventTime"
					type="text"
					value={eventTime}
					onChange={e => setEventTime(e.target.value)}
				/>
        <label htmlFor="eventName">Location </label>
				<input
					id="eventLocation"
					type="text"
					value={eventLocation}
					onChange={e => setEventLocation(e.target.value)}
				/>
        <label htmlFor="eventName">Picture </label>
				<input
					id="eventPicture"
					type="text"
					value={eventPicture}
					onChange={e => setEventPicture(e.target.value)}
				/>

				<button type="submit">Update this project</button>
			</form>
			<div>
            Outdoor
            <input type="checkBox" value={outdoors} onChange={handleCheckBox}/>
        	</div>
			<button onClick={deleteEvent}>Delete this project</button>
		</>

	)
}

