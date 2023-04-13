import React from "react";

function Menu(props) {
  return (
    <div className="menu-buttons">
      <p>How much water do you want your plant to have?</p>
      <button  className="menu-button"  onClick={props.plusOneFirstRow} disabled={props.firstRowDisabled}>
        Small
      </button>
      <button  className="menu-button" onClick={props.plusTwoFirstRow} disabled={props.firstRowDisabled}>Medium</button>
      <button  className="menu-button" onClick={props.plusThreeFirstRow} disabled={props.firstRowDisabled}>Large</button>
      <p>How much light do you want your plant to have?</p>
      <button  className="menu-button" onClick={props.plusOneSecondRow} disabled={props.secondRowDisabled}>Small</button>
      <button  className="menu-button" onClick={props.plusTwoSecondRow} disabled={props.secondRowDisabled}>Medium</button>
      <button  className="menu-button" onClick={props.plusThreeSecondRow} disabled={props.secondRowDisabled}>Large</button>
      <p>How big do you want your plant to be?</p>
      <button  className="menu-button" onClick={props.plusOneThirdRow} disabled={props.thirdRowDisabled}>Small</button>
      <button  className="menu-button" onClick={props.plusTwoThirdRow} disabled={props.thirdRowDisabled}>Medium</button>
      <button  className="menu-button"onClick={props.plusThreeThirdRow} disabled={props.thirdRowDisabled}>Large</button>
      <div className="main-buttons">
        <button className="start" onClick={props.reset}>
          Reset
        </button>
      </div>
    </div>
    
  );
}

export default Menu;
