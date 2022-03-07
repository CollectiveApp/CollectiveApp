import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



export default function EventsVisitorsList (){

    const [events, setEvents] = useState('')
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

    const filteredDateEvents = () =>{
        events.filter()
    }

    useEffect(()=> {getAllEvents()}, [])

    return(
        <>
            {events.map(event=> {
                return(
            <div key={event._id}>
                <h5>{event.eventName}</h5>
                <div>{event.eventDescription}</div>
                <Link to={`/events/${project._id}`}>Details & Volunteer</Link>
            </div>)})}
        </>
    )
}