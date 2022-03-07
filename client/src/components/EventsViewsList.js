import { useState } from "react/cjs/react.production.min"



export default function EventsVisitorsList (){

    const [events, setEvents] = useState('')

    //get events from backend
    // const getAllEvents =() => {

    //     axios.get(`/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
    //     .then(response => {
    //       console.log('response.data',response.data)
    //       setEvents(response.data)
    //     })
    //     .catch(err => {console.log(err) })
    //   }

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