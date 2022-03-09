

export default function TypeFilterEvent(props){

    
    const options = [
        {label:'See All', value:''},
        {label: 'Music', value: 'music' },
        {label: 'Food', value: 'food'},
        {label: 'Sports', value: 'sports' },
        {label: 'Arts', value: 'arts' },
        {label: 'Building', value: 'building' },
        {label: 'Meetups', value: 'meetups' },
        {label: 'Social Volunteer', value: 'social volunteer' },
    ]

    console.log('this are the props', props)

    

    return(
        <>
        <div>
            Event Type
        </div>
        <div>
        <label>
            <select className="filterEvent-input-box" value={props.type} onChange={(event => props.setTypeProp(event.target.value))}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </label>
        </div>
        </>
    )
}