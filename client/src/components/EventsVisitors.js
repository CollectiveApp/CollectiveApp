import React from "react";
import EventNavbar from "./EventNAvbar";
import EvetntFiltersBar from "./EventFiltersBar";
import EventsVisitorsList from "./EventsViewsList";


export default function EventsVisitors(){

    const [events, setEvents] = useState([])

    let  filteredSearchEvents = events.filter(event =>{
        return event.toLowerCase().includes(query) 
    })

    return(
        <>
        <EventNavbar />
        <EvetntFiltersBar />
        <EventsVisitorsList events={filteredSearchEvents}/>
        </>
    )
}

