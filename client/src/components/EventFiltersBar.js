import react from "react";
import { useState } from "react/cjs/react.production.min";
import DateFilterEvent from "./DateFilterEvent";
import SearchBArEvent from "./SearchBarEvent";


export default function EvetntFiltersBar (){
    
    const [query, setQuery] = useState('')
    const [events, setEvents] = useState('')

    const filteredDateEvents = () =>{
        events.filter(
        )
    }

    return(
        <>
        <DateFilterEvent events={filteredDateEvents}/>
        <TypeFilterEvent />
        <LocationFilterEvent/>
        <div>
            <SearchBArEvent setQueryProp={setQuery}/>
        </div>
        <ToggleEvent />
        
        </>
    )
}