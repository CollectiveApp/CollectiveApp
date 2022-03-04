import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateEvent from './CreateEvent'


export default function EventList() {
    
    const [events, setEvents] = useState([])
    const [eventName, setEventName] = useState('');
	const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventPicture, setEventPicture] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [outdoors, setOutdoors] = useState(false)
  const [showCreateEvent, setShowCreateEvent] = useState(false)
    
    const storedToken = localStorage.getItem('authToken')
    
    
    //get events from backend
    const getAllEvents =() => {
      axios.get('/api/event', {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        setEvents(response.data)
      })
      .catch(err => {console.log(err) })
    }
    
    useEffect(() => {
          setEventName('')
          setEventDescription('')
          setEventDate('')
          setEventTime('')
          setEventType('')
          setEventPicture('')
          setEventLocation('')
          setOutdoors(false)
    }, [])
    
    
    return(
        <>
            <button onClick={()=> setShowCreateEvent(!showCreateEvent)}>CreateEvent</button>
            {showCreateEvent && (
                <CreateEvent refreshEvents={getAllEvents}/>
            )}
            {events.map(event=>
              <div key={event._id}>
                <h1>{event.eventName}</h1>
                <Link to={'/behind-the-scences/event/edit/:id'}>Edit</Link>
            </div>)}
        </>
    )  
}