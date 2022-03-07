import React from "react";
import EventNavbar from "../components/EventNAvbar";
import EvetntFiltersBar from "../components/EventFiltersBar";
import EventsVisitorsList from "../components/EventsViewsList";


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