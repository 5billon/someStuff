import React, {useState} from "react";

function NewPlantForm({addPlantToState}) {
  //deliverable 2
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  console.log(name, price, image)

  // Same As above using only one state and function 
  // const [form, setForm] = useState({})
  // const updateForm = e => {
  //  setForm({..form, [e.target.name] : e.target.value})
  // }

  const attemptNewPlant = e => {
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: price,
    }
    addPlantToState(newPlant)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit ={attemptNewPlant}>
        <input onChange = {(e) => setName(e.target.value)}type="text" name="name" placeholder="Plant name" />
        <input onChange = {e => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
        <input onChange = {e => setPrice(e.target.value)}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
