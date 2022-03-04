import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom'

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
	const navigate = useNavigate()


	const handleSubmit = e => {
		console.log()
		e.preventDefault()
		const requestBody = { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation, outdoors }
		axios.put(`/api/event/${id}`, requestBody)
			.then(() => {
				navigate(`/behind-the-scences/event/edit/${id}`)
			})
			.catch(err => console.log(err))
	}


	const storedToken = localStorage.getItem('authToken')

	const getEventToEdit = () => {
		axios.get(`${API_URL}/api/project/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
		.then(response =>{
			const { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation, setOutdoors } = response.data
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
	}
	useEffect(() => { getEventToEdit()}, [])

	
    const handleCheckBox = e => setOutdoors(e.target.value)

	return (
		<>
			<h1>Edit <>{eventName}</> event</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="eventName">Event name </label>
				<input
					id="eventName"
					name='eventName'
					type="text"
					value={eventName}
					onChange={e => setEventName(e.target.value)}
				/>
				<label htmlFor="eventName">Description </label>
				<input
					id="eventDescription"
					name='eventDescription'
					type="text"
					value={eventDescription}
					onChange={e => setEventDescription(e.target.value)}
				/>
        <label htmlFor="eventName"> Type </label>
				<input
					id="eventType"
					name='eventType'
					type="text"
					value={eventType}
					onChange={e => setEventType(e.target.value)}
				/>
        <label htmlFor="eventName">Date </label>
				<input
					id="eventDate"
					name='eventDate'
					type="date"
					value={eventDate}
					onChange={e => setEventDate(e.target.value)}
				/>
        <label htmlFor="eventName">Time </label>
				<input
					id="eventTime"
					name='eventTime'
					type="time"
					value={eventTime}
					onChange={e => setEventTime(e.target.value)}
				/>
        <label htmlFor="eventName">Location </label>
				<input
					id="eventLocation"
					name='eventLocation'
					type="text"
					value={eventLocation}
					onChange={e => setEventLocation(e.target.value)}
				/>
        <label htmlFor="eventName">Picture </label>
				<input
					id="eventPicture"
					name='eventPicture'
					type="text"
					value={eventPicture}
					onChange={e => setEventPicture(e.target.value)}
				/>
				<div>
            		Outdoor
            		<input type="checkBox" value={outdoors} name='outdoors' onChange={handleCheckBox}/>
        		</div>
				<button type="submit">Update this project</button>
				<div>
					<Link to='/behind-the-scences'>back</Link>
				</div>
			</form>
			
			
		</>

	)
}

