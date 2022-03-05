import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PopupCreateEvent from './PopupCreateEvent'
import PopupEditEvent from './PopUpEditEvent'




export default function EventList() {
    
    const [events, setEvents] = useState([])
    const [showCreateEvent, setShowCreateEvent] = useState(false)
    const [eventToEdit, setEventToEdit] = useState(null)
    
    const storedToken = localStorage.getItem('authToken')
    
    //popup handle
    const handlePopupEdit = event => {
      setEventToEdit(event)
    }
    
    //get events from backend
    const getAllEvents =() => {

      axios.get(`${API_URL}/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
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
                <PopupCreateEvent refreshEvents={getAllEvents} handleClose={() => setShowCreateEvent(false)}/>
            )}
            {events.map(event=>
              <div key={event._id}>
                <h1>{event.eventName}</h1>
                <button onClick={()=> {handlePopupEdit(event)}}>Edit</button>
                  {eventToEdit && <PopupEditEvent
                  handleClose={() => {setEventToEdit(null)}} thisevent={eventToEdit} refreshEvents={getAllEvents}/>
                  }
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