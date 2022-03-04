import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CreateEvent from './CreateEvent'
import EditEvent from '../pagesAdmin/EditEvent'


export default function EventList() {
    
    const [events, setEvents] = useState([])
    const [showCreateEvent, setShowCreateEvent] = useState(false)
    
    const storedToken = localStorage.getItem('authToken')
    
    
    //get events from backend
    const getAllEvents =() => {
      axios.get('/api/event/', {headers: {Authorization: `Bearer ${storedToken}`}})
      .then(response => {
        console.log('response.data',response.data)
        setEvents(response.data)
      })
      .catch(err => {console.log(err) })
    }
    
   useEffect(() => {
     getAllEvents()          
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
                <button><Link to={`/behind-the-scences/event/edit/${event._id}`}>Edit</Link></button>
                <button onClick={()=>{
                    axios.delete(`/api/event/${event._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedEvent', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllEvents();
                        })
                      .catch(err => console.log(err))
                  }}>Delete</button>
            </div>)}
        </>
    )  
}