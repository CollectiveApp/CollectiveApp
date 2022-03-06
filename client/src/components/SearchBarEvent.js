import React, { useState } from 'react'

export default function SearchBArEvent(props){


    const handleInputChange = event => {
		
		props.setQueryProp(event.target.value)
	}
    

    return (
        <>
            <input type="search" onChange={handleInputChange} />
        </>
    )
}