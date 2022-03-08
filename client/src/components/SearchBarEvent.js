export default function SearchBarEvent(props){

    const handleInputChange = event => {
		
		props.setQueryProp(event.target.value)
	}
    
    return (
        <>
            <input type="search" onChange={handleInputChange} />
        </>
    )
}