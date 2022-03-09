export default function ToggleEvent(props){
    


    const handleCheckBox = event => {
        
        props.setCheckProp(event.target.checked)
        
    }
 
    return(
        <>
        <div>Outdoor</div>
        <label className="toggle-switch">
        <input type="checkBox" onChange={handleCheckBox}/>
        <span className="switch"/>
        </label>
        </>
    )
}
