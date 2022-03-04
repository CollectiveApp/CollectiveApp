import React from "react";
import EditProject from "../pagesAdmin/EditProject";
 
const Popup = props => {
    console.log("props", props)
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <EditProject specificproject={props.thisproject} refreshProjects={props.refreshProjects}/>
      </div>
    </div>
  );
};
 
export default Popup;