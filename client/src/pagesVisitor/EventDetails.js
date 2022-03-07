import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

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
				{event.map(image => { 
					console.log(image)
					return (
					<div key={event._id}>
					<img src={image} alt="Event Pictures"/>
					</div>
					)
					}
				)}
				<h1>{event.eventName}</h1>
          		<h4>Location: {event.eventLocation}</h4>
				<p>What the event is about: {event.eventDescription}</p>
				<div>
				<h4>Wanna Participate?</h4>
				<h5>Click</h5>
				<h5>Pfeil nach unten</h5>
				<Link to={`/volunteer/${event._id}`}>Volunteer</Link>
				</div>
			</>
			}
    </>
	)
}
