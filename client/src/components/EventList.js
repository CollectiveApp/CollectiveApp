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

      axios.get(`/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
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
          <div className='dash-title-box-2'>
            <div className='dash-titles'>
              Events
            </div>
            <div>
              <button className='button-create' onClick={()=> setShowCreateEvent(!showCreateEvent)}>CreateEvent</button>
                {showCreateEvent && (
                <PopupCreateEvent refreshEvents={getAllEvents} handleClose={() => setShowCreateEvent(false)}/>
              )}
            </div>
          </div>
          <div>
            {events.map(event=>
              <div className='dash.list' key={event._id}>
                <h3>{event.eventName}</h3>
                <button className='dash-edit-button' onClick={()=> {handlePopupEdit(event)}}>Edit</button>
                  {eventToEdit && <PopupEditEvent
                  handleClose={() => {setEventToEdit(null)}} thisevent={eventToEdit} refreshEvents={getAllEvents}/>
                  }
                <button className='dash-delete-button' onClick={()=>{
                    axios.delete(`/api/event/${event._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedEvent', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllEvents();
                        })
                      .catch(err => console.log(err))
                  }}>Delete</button>
                  <hr className='dash-line'></hr>
            </div>)}
          </div>
        </>
    )  
}