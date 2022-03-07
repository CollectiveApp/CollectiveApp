import React from "react";
import CreateProject from "../components/CreateProject";
 
const Popup = props => {
    console.log("props", props)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>X</span>
        <CreateProject refreshProjects={props.refreshProjects}/>
      </div>
    </div>
  );
};
 
export default Popup;