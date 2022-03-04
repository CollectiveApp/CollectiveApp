import React, {useState} from 'react'
import Outdoor from './Otdoor';
import axios from 'axios'



export default function CreateEvent(props) {

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [eventType, setEventType] = useState('')
  const [eventPicture, setEventPicture] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  
  const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { eventName, eventDescription, eventDate, eventTime, eventType, eventPicture, eventLocation }
		axios.post(`/api/events/create`, requestBody)
			.then(() => {
			})
			.catch(err => console.log(err))
      setEventName('')
      setEventDescription('')
      setEventDate('')
      setEventTime('')
      setEventType('')
      setEventLocation('')
      setEventPicture('')

      props.refreshProjects()
	}


  const handleEventName = e => setEventName(e.target.value)
  const handleEventDescription = e => setEventDescription(e.target.value)
  const handleEventDate= e => setEventDate(e.target.value)
  const handleEventTime = e => setEventTime(e.target.value)
  const handleEventType = e => setEventType(e.target.value)
  const handleEventLocation = e => setEventLocation(e.target.value)
  const handleEventPicture = e => setEventPicture(e.target.value)

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name</label>
        <input type="text" value={eventName} onChange={handleEventName}></input>
        <label htmlFor='Description'>Description</label>
        <input type="text" value={eventDescription} onChange={handleEventDescription}></input>
        <label htmlFor='Date'>Date</label>
        <input type="date" value={eventDate} onChange={handleEventDate}></input>
        <label htmlFor='Time'>Time</label>
        <input type="time" value={eventTime} onChange={handleEventTime}></input>
        <label htmlFor='Location'>Location</label>
        <input type="text" value={eventLocation} onChange={handleEventLocation}></input>
        <label htmlFor='Type'>Type</label>
        <input type="text" value={eventType} onChange={handleEventType}></input>
        <label htmlFor='Picture'>Picture</label>
        <input type="text" value={eventPicture} onChange={handleEventPicture}></input>
        
        <Outdoor />
                
        <button type='submit'>Submit New Event</button>
    </form>
    </>
  )
}