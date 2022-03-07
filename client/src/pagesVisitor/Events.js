import React from "react";
import EventNavbar from "../components/EventNAvbar";
import EventFiltersBar from "../components/EventFiltersBar";
import EventsVisitorsList from "../components/EventsVisitorsList";
import { useState } from "react";


export default function EventsVisitors(){

    const [events, setEvents] = useState([])

    let  filteredSearchEvents = events.filter(event =>{
        return event.toLowerCase().includes(query) 
    })

    return(
        <>
        <EventNavbar />
        <EventFiltersBar />
        <EventsVisitorsList events={filteredSearchEvents}/>
        </>
    )
}