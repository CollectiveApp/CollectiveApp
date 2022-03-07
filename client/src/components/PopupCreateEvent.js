import React from "react";
import CreateEvent from './CreateEvent'

export default  function PopupCreateEvent  (props) {

    return(
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>X</span>
                <CreateEvent refreshEvents={props.refreshEvents}/>
            </div>
        </div>
    )

}