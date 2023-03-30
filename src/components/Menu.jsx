import React from "react";

function Menu(props) {
  return (
    <div className="menu-buttons">
      <p>How much water do you want your plant to have?</p>
      <button  className="menu-button"  onClick={props.plusOne}>
        Small
      </button>
      <button  className="menu-button" onClick={props.plusTwo}>Medium</button>
      <button  className="menu-button" onClick={props.plusThree}>Large</button>
      <p>How much light do you want your plant to have?</p>
      <button  className="menu-button" onClick={props.plusOne}>Small</button>
      <button  className="menu-button" onClick={props.plusTwo}>Medium</button>
      <button  className="menu-button" onClick={props.plusThree}>Large</button>
      <p>How big do you want your plant to be?</p>
      <button  className="menu-button" onClick={props.plusOne}>Small</button>
      <button  className="menu-button" onClick={props.plusTwo}>Medium</button>
      <button  className="menu-button"onClick={props.plusThree}>Large</button>
      <div className="main-buttons">
        <button className="start" onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
    
  );
}

export default Menu;
