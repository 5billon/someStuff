import React, {useState} from "react";

function PlantCard({plant}) {
  //deliverable 3 is rest
  const [isInStock, setIsInStock] = useState(true)

  const handleClick = () => {
    setIsInStock( !isInStock) //this relates to line 16
  }
  //deliverable 1 starts at 11, ends at 15
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={ handleClick }className="primary">In Stock</button>
      ) : (
        <button onClick={ handleClick }>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
