

export default function DateFilterEvent(props){


    return(
        <>
			<input className="filterEvent-input-box"
				name='eventDate'
				type="date"
				value={props.eventDate}
				onChange={e => props.setEventDateProp(e.target.value)}
			/>
            
        </>
    )
}