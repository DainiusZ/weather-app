import React from "react";
import WeatherCard from "./WeatherCard";
import "./WeatherCardList.css";

function WeatherCardList({ props }) {
  console.log("weather list", props);

  const apiDataArray = props.map((item) => {
    return <WeatherCard key={item.key} apiObject={item} />;
  });
  return <div className="cardlist-container">{apiDataArray}</div>;
}

export default WeatherCardList;
