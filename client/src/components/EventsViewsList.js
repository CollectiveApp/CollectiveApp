import { useState } from "react/cjs/react.production.min"



export default function EventsVisitorsList (){

    const [events, setEvents] = useState('')

    return(
        <>
            {events.map(event=>
            <div key={event._id}>
                <h5>{event.eeventName}</h5>
                <div>{event.eventDescription}</div>
            </div>)}
        </>
    )
}