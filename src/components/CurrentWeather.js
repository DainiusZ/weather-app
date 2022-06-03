import React from "react";
import "./CurrentWeather.css";

function CurrentWeather({ props }) {
  console.log("CurrentWeather", props[0]);
  // let newDataObj = {}
  // let date, city, dayTemp, nightTemp, rain, rainIconUrl, wind;
  // if (props) {
  //   ({ date, city, dayTemp, nightTemp, rain, rainIconUrl, wind } = props[0]);
  // }
  const { date, city, dayTemp, nightTemp, rain, rainIconUrl, wind } = props[0];
  const currentDate = new Date(date).toLocaleString("en-us", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  // console.log("props", date, city, dayTemp, nightTemp, rain, rainIconUrl, wind);

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
      </div>
      <div className="header">
        <p className="city">{city}</p>
        <p className="header-date">{currentDate}</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
