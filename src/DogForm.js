function DogForm({ name, handleNameInput, breed, handleBreedInput, age, handleAgeInput }) {
  return (
    <form>
      <label>
        Name:
        <input 
            id="name" 
            name="name" 
            type="text" 
            onChange={handleNameInput}
            value={name}
        />
      </label>
      <br />

      <label>
        Breed:
        <input 
            id="breed" 
            name="breed" 
            type="text" 
            onChange={handleBreedInput}
            value={breed}
        />
      </label>
      <br />

      <label>
        Age:
        <input 
            id="age" 
            breed="age" 
            type="text"
            onChange={handleAgeInput}
            value={age} 
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default DogForm;