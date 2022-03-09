export default function VolunteerToggle(props){

    const handleCheckBox = e => {
        props.setToggle(e.target.checked)
    }
 
    return(
        <>
            <div>Has Tools</div>
            <label className="toggle-switch">
            <input type="checkBox" onChange={handleCheckBox}/>
            <span className="switch"/>
            </label>
        </>
    )
}
