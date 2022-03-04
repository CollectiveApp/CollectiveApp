
import React, {useState} from 'react'


export default function Outdoor() {
    const [outdoors, setOutdoors] = useState(false)

    const handleCheckBox = e => setOutdoors(e.target.value)

    return(
        <>
        <div>
            Outdoor
            <input type="checkBox" onChange={handleCheckBox}/>
        </div>
        </>
    )
}


