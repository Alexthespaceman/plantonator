import React from "react";

function Start(props) {
  return (
    <div className="hello">
      <button className="start" onClick={props.plusOne}>
        Press to start
      </button>
    </div>
  );
}

export default Start;
