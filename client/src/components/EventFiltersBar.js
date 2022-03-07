import { useState } from "react/cjs/react.production.min";
import DateFilterEvent from "./DateFilterEvent";
import SearchBArEvent from "./SearchBarEvent";


export default function EventFiltersBar (){
    
    const [query, setQuery] = useState('')
    const [events, setEvents] = useState('')

     

    return(
        <>
        <DateFilterEvent events={filteredDateEvents}/>
        
        <LocationFilterEvent/>
        <div>
            <SearchBArEvent setQueryProp={setQuery}/>
        </div>
        <ToggleEvent />
        
        </>
    )
}