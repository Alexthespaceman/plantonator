import React from "react";

function Reset(props) {
  return (
    <div className="hi">
      <button className="reset-button" onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
