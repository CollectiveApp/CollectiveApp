import React, { useState } from 'react'


export default function DateFilterEvent(){

    const [events, setEvents] = useState([])
    const [eventDate ,setEventDate] = useState()

    const handleSubmit = e =>{
        e.preventDefaullt()

        axios.get(`/api/event/`, {headers: {Authorization: `Bearer ${storedToken}`}})
         .then(response => {
           console.log('response.data',response.data)
           setEvents(response.data)
         })
        .catch(err => {console.log(err) })

        setEvents('')
        setEventDate('')
    }

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