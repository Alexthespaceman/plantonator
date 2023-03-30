import React from "react";
import plantImage from "../images/choose-plant.jpeg";

function Plants(props) {
  if (props.count === 0) {
    return (
      <div className="grid">
        <img className="plant-book" src={plantImage} alt="plant-book"></img>
        <h2 className="choose"> Choose wisely </h2>
      </div>
    );
  }
  return (
    <div className='grid'>
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
                <p className="plant-name">{plant.name}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Plants;
