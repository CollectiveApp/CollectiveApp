import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EventNavbar from '../components/EventNavbar'

export default function EventDetails() {

 const { id } = useParams()

	const [event, setEvent] = useState(null);

	useEffect(() => {
		axios.get(`/api/event/${id}`)
			.then(response => {
				console.log(response)
				setEvent(response.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
	<>
		{event === null ? <div>Loading ...</div> :
		<>
			<EventNavbar />
			<div className='bg-overlay-event-detail page-container'> 
				<div className='heading-projectdetail-container'></div>
				<div className='event-detail-container'>
					<div>{event.eventPicture}</div>
					<h1>{event.eventName}</h1>
					<p>#{event.eventType}</p>
					<h4><img className='map-icon' src='/images/placeholder.png' alt=''/>{event.eventLocation}</h4>
					<p>{event.eventDate}</p>
					<p>{event.eventTime}</p>
					<h4>What the event is about:</h4> 
					<p>{event.eventDescription}</p>
				</div>
			</div>
		</>
		}
    </>
	)
}
