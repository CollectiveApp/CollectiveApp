import { useState } from "react"
import Dropdown from "./TypeEventsDropdown"



export default function TypeFilterEvent(){

    const [value, setValue] = useState('')
    const options = [
        {label:'All', value:'all'},
        {label: 'Music', value: 'music' },
        {label: 'Food', value: 'food'},
        {label: 'Sports', value: 'sports' },
        {label: 'Arts', value: 'arts' },
        {label: 'Building', value: 'building' },
        {label: 'Meetups', value: 'meetups' },
        {label: 'Social Volunteer', value: 'social volunteer' },
    ]

    const handleChange = event =>{
        setValue(event.target.value)
    }

    return(
        <>
        <div>
            Event Type
        </div>
        <div>
            <Dropdown
            options={options}
            value={value}
            onChange={handleChange}/>
        </div>
        </>
    )
}