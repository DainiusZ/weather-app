import React from "react";

function CitySelection({ setName }) {
  let input = "";

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#form");
    form.reset();
    return setName(input);
  }

  function handleInput(e) {
    return (input = e.target.value);
  }
  return (
    <div>
      <form id="form">
        <input
          id="city-name"
          name="city"
          onChange={handleInput}
          type="text"
          placeholder="Enter city name"
        ></input>
        <input type="submit" onClick={handleSubmit} value={"Submit"} />
      </form>
    </div>
  );
}

export default CitySelection;
