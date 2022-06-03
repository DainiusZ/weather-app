import React from "react";
import "./CitySelection.css";

function CitySelection({ setName }) {
  let input = "";

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#form");
    if (form.checkValidity()) {
      form.reset();
      return setName(input);
    }
  }

  function handleInput(e) {
    console.log("input", e.target.value);

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
          required
        ></input>
        <input type="submit" onClick={handleSubmit} value={"Submit"} />
      </form>
    </div>
  );
}

export default CitySelection;
