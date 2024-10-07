import "./App.css";
import { useState } from "react";
import DogForm from "./DogForm.js";

function App() {
  const [name, setName] = useState("");
  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const [breed, setBreed] = useState("");
  const handleBreedInput = (event) => {
    setBreed(event.target.value);
  };

  const [age, setAge] = useState("");
  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <h1>New Dog Form</h1>
      <section>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Breed:</strong> {breed}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
      </section>

      <DogForm
        name={name}
        handleNameInput={handleNameInput}
        breed={breed}
        handleBreedInput={handleBreedInput}
        age={age}
        handleAgeInput={handleAgeInput}
      />
    </>
  );
}

export default App;
