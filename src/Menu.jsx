import React from "react";

function Menu(props) {
  return (
    <div className="menu-buttons">
      <p>How much water do you want your plant to have?</p>
      <button color="#ff5c5c" onClick={props.plusOne}>
        Small
      </button>
      <button onClick={props.plusTwo}>Medium</button>
      <button onClick={props.plusThree}>Large</button>
      <p>How much light do you want your plant to have?</p>
      <button onClick={props.plusOne}>Small</button>
      <button onClick={props.plusTwo}>Medium</button>
      <button onClick={props.plusThree}>Large</button>
      <p>How big do you want your plant to be?</p>
      <button onClick={props.plusOne}>Small</button>
      <button onClick={props.plusTwo}>Medium</button>
      <button onClick={props.plusThree}>Large</button>
    </div>
  );
}

export default Menu;
