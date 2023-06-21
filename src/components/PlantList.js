import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  //deliverable 1
  const plantComponents = plants.map(plantObject => {return <PlantCard plant={plantObject} key={plantObject.id}/>})
  return (
    <ul className="cards">
      {plantComponents}
    </ul>
  );
}

export default PlantList;
