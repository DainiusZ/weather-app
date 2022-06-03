import React from "react";
import "./WeatherCard.css";

function WeatherCard({ apiObject }) {
  const { date, dayTemp, nightTemp, rain, rainIconUrl, wind } = apiObject;
  const weekDayShortString = new Date(date).toLocaleString("en-us", {
    weekday: "short",
  });

  return (
    <div>
      <div className="card">
        <h2 className="date">{weekDayShortString}</h2>
        <img className="weather-icon" src={rainIconUrl} alt="weather-icon" />
        <div className="card__details--front">
          <div className="temp-container">
            <h2 className="day-temp">{dayTemp}&deg;C</h2>
            <h2 className="night-temp">{nightTemp}&deg;C</h2>
          </div>
          <p>Wind: {wind} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
