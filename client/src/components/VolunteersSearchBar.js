import React from 'react'

export default function VolunteersSearchBar(props) {

// handleSearchInput saves the typed-in info as a value
const handleSearchInput = (searchInput) => {
    console.log(searchInput.target.value)
  props.setSearch(searchInput.target.value)
}


  return (
    <div>
        <input type="search" value={props.search} onChange={handleSearchInput} placeholder='Search...'/>
    </div>
  )
}
