import React, { useState } from 'react'

export default function DateFilterEvent(){

    const [events, setEvents] = useState([])
    const [eventDate ,setEventDate] = useState

    

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="eventName">Date </label>
			<input
				id="eventDate"
				name='eventDate'
				type="date"
				value={eventDate}
				onChange={e => setEventDate(e.target.value)}
			/>
        <button type='submit'>Go</button>
        </form>
        </>
    )
}