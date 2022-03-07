import React from "react";
import EditEvent from "../pagesAdmin/EditEvent";
 
const PopupEditEvent = props => {
    console.log("props", props)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <EditEvent specificevent={props.thisevent} refreshProjects={props.refreshEvents}/>
      </div>
    </div>
  );
};
 
export default PopupEditEvent;