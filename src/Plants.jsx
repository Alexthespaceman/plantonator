import React from "react";
import plantImage from "./images/choose-plant.jpeg";

function Plants(props) {
  if (props.count === 0) {
    return (
      <div className="select">
        {" "}
        {/* <p>Please select one from each category! </p> */}
        <img className="plant-book" src={plantImage} alt="plant-book"></img>
        <h2 className="choose"> Choose wisely </h2>
      </div>
    );
  }
  return (
    <ul className="grid3x3">
      {props.plants
        .filter((plant) => plant.total > props.count)
        .map((plant) => {
          return (
            <li key={plant.id}>
              <img
                src={plant.img}
                className="plant-img"
                alt={`house plant, ${plant.name}`}
              ></img>
              {/* <p className="plantName">{plant.name}</p> */}
            </li>
          );
        })}
    </ul>
  );
}

export default Plants;
