import React from "react";

function Start(props) {
  return (
    <div className="main-buttons">
     
      <button className="start" onClick={props.plusOne}>
        Press to start
      </button> 
    </div>
  );
}

export default Start;
