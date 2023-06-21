import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //deliverable 2
  const [plantsArray, setPlants] = useState([])

  const addPlantToState = theNewPlantObj => {
    setPlants([...plantsArray, theNewPlantObj]) //plantsArray was reused by filter, turned into filterPlants
  }
  //useEffect deliverable 1
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then( r => r.json())
      .then(plantsData => setPlants(plantsData))
  },[])

  //deliverable 4
  const [search, setSearch] = useState('')
  const updateSearchState = someNewString => {
    setSearch(someNewString)
  }

  const filteredPlants = plantsArray.filter(plantObj => {
    /* This call back function, plantObj, we are giving to filter, 
       NEEDS to have a return value of true or false, 
       so filter knows what to put in the filtered array */
    return plantObj.name.toLowerCase().includes( search.toLowerCase() )
  })
  console.log('search', search)
  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState}/>
      <Search updateSearchState={updateSearchState}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
