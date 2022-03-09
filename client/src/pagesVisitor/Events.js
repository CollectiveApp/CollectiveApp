import React from "react";
import EventNavbar from "../components/EventNavbar";
import DateFilterEvent from "../components/DateFilterEvent";
import SearchBarEvent from "../components/SearchBarEvent";
import { useState, useEffect } from "react";
import ToggleEvent from "../components/ToggleEvent";
import axios from 'axios'
import { Link } from "react-router-dom";
import TypeFilterEvent from "../components/TypeEventFilter";


export default function EventsVisitors(){

    

    const [events, setEvents] = useState(null)
    const [query, setQuery] = useState('')
    const [eventDate ,setEventDate] = useState()
    const [toggle, setToggle] = useState(false)
    const [type, setType] = useState('all')

    

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

    let filteredEvents;

    if(events){
    filteredEvents = events.filter(event =>{
       return event.eventName.toLowerCase().includes(query)
    })}

    if(toggle){
         filteredEvents = filteredEvents.filter(event => {
           return event.eventOutdoor === true
        })
    }
    
    // if(type === 'all'){
    //     return filteredEvents
    // }else{
    //     filteredEvents = filteredEvents.filter( event =>{
    //         event.eventType = type
    //     })
    // }
   
    
    if(events === null){
        return <></>
    }


    return(
        <>
        <div>
            <EventNavbar />
        </div>
        <div>
            <div>
                <DateFilterEvent setDateProp={setEventDate}/>
                <SearchBarEvent setQueryProp={setQuery}/>
                <ToggleEvent setCheckProp={setToggle}/>
                <TypeFilterEvent setTypeProp={setType}/>
                
            </div>
            <div>
            {filteredEvents.map(event =>{
            return(
                <div key={event._id}>
                    <h5>{event.eventName}</h5>
                    <div>{event.eventDescription}</div>
                    <Link to={`/events/${event._id}`}>Details & Volunteer</Link>
                </div>)
        })}

                
            </div>
        </div>
        </>
    )
}