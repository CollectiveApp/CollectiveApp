import React from "react";
import EditProject from "../pagesAdmin/EditProject";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <EditProject />
      </div>
    </div>
  );
};
 
export default Popup;