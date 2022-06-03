import React from "react";
import CitySelection from "./CitySelection";
import "./CurrentWeather.css";

function CurrentWeather({ props, setCity }) {
  const { date, city, dayTemp, nightTemp, rain, rainIconUrl, wind } = props[0];
  const currentDate = new Date(date).toLocaleString("en-us", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="container">
      <div className="temperature">
        <img className="weather-icon" src={rainIconUrl} alt="weather-icon" />
        <p className="day">{dayTemp}&deg;C</p>
        <span className="night">{nightTemp}&deg;</span>
      </div>
      <div className="weather">
        <p className="rain">{rain}</p>
        <p className="wind">Wind: {wind} m/s</p>
        <div className="search-container">
          <CitySelection setName={setCity} />
        </div>
      </div>
      <div className="header">
        <p className="city">{city}</p>
        <p className="header-date">{currentDate}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
