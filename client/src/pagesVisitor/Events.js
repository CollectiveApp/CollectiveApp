import React from "react";
import EventNavbar from "../components/EventNavbar";
import DateFilterEvent from "../components/DateFilterEvent";
import SearchBarEvent from "../components/SearchBarEvent";
import { useState, useEffect } from "react";
import ToggleEvent from "../components/ToggleEvent";
import axios from 'axios'
import { Link } from "react-router-dom";
import TypeFilterEvent from "../components/TypeFilterEvent";



export default function EventsVisitors(){

    

    const [events, setEvents] = useState(null)
    const [query, setQuery] = useState('')
    const [eventDate ,setEventDate] = useState('')
    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState('')

    

    const storedToken = localStorage.getItem('authToken')

    //get events from backend

    const getAllEvents =() => {

        axios.get(`/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then(response => {
          console.log('response.data',response.data)
          setEvents(response.data)
        })
       .catch(err => {console.log(err) })
   }

   useEffect(()=> {getAllEvents()}, [])

   const handleClean = () => {
       setEventDate('')
   }

    let filteredEvents;

    if(events){
    filteredEvents = events.filter(event =>{
       return event.eventName.toLowerCase().includes(query)
    })}

    
    if(events && eventDate){
        filteredEvents = filteredEvents.filter(event =>{
            return event.eventDate === eventDate
         })
    }

    if(toggle){
         filteredEvents = filteredEvents.filter(event =>{
            return event.eventOutdoor === true
        })
    }
    
    if(type !== ''){
       filteredEvents = filteredEvents.filter( event =>{
           return event.eventType.toLowerCase() === type.toLowerCase()
       })
    }
   
    
    if(events === null){
        return <>Loading...</>
    }
    
    return(
        <div className="events-view-background">
        <div>
            <EventNavbar />
        </div>
        <div className="events-view-back">
            <div className="filters-box">
                <div className="filter-title">
                    <p>Find your event</p>
                </div>
                <div>
                    <DateFilterEvent eventDate={eventDate} setEventDateProp={setEventDate}/>
                    <button className='glow-on-events' onClick={handleClean}>Reset date</button> 
                    <SearchBarEvent setQueryProp={setQuery}/>
                    <TypeFilterEvent type={type} setTypeProp={setType}/>
                    <ToggleEvent setCheckProp={setToggle}/>
                </div>
                
            </div>
            <div className="events-view-box">
                <h2>Events</h2>
            {filteredEvents.map(event =>{
            return(
                <div key={event._id} className='events-view-ind-box'>
                    <div className="events-view-image-box">{event.eventPicture}</div>
                    <div>
                    <hr className="hr"></hr>
                    <h3>{event.eventName}</h3>
                    <div className="event-description">{event.eventDescription}</div>
                    <div>{event.eventType}</div>
                    <div>{event.eventDate}</div>    
                    <Link to={`/events/${event._id}`}>Details</Link>
                    </div>
                </div>)
            })}

                
            </div>
        </div>
        </div>
    )
}