

export default function DateFilterEvent(props){


    return(
        <>
			<input
				name='eventDate'
				type="date"
				value={props.eventDate}
				onChange={e => props.setEventDateProp(e.target.value)}
			/>
            
        </>
    )
}