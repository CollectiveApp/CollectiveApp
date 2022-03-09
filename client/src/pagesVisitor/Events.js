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
        <>
        <div>
            <EventNavbar />
        </div>
        <div className="events-view-back">
            <div className="filters-box">
                <p>Filter</p>
                <DateFilterEvent eventDate={eventDate} setEventDateProp={setEventDate}/>
                <button onClick={handleClean}>clean</button> 
                <SearchBarEvent setQueryProp={setQuery}/>
                <TypeFilterEvent type={type} setTypeProp={setType}/>
                <ToggleEvent setCheckProp={setToggle}/>
                
            </div>
            <div>
            {filteredEvents.map(event =>{
            return(
                <div key={event._id}>
                    <div>{event.eventPicture}</div>
                    <h5>{event.eventName}</h5>
                    <div>{event.eventDescription}</div>
                    <Link to={`/events/${event._id}`}>Details</Link>
                </div>)
            })}

                
            </div>
        </div>
        </>
    )
}