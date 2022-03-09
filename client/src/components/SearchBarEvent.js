export default function SearchBarEvent(props){

    const handleInputChange = event => {
		
		props.setQueryProp(event.target.value)
	}
    
    return (
        <>
            <div>search</div>
            <input type="search" onChange={handleInputChange} />
        </>
    )
}