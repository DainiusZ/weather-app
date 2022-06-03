import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import WeatherCardList from "./components/WeatherCardList";
import CurrentWeather from "./components/CurrentWeather";
import CitySelection from "./components/CitySelection";
import getData from "./filterApiData";
import "./App.css";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [apiData, setApiData] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isDataFiltered, setDataFiltered] = useState(false);
  let url;
  cityName
    ? (url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
    : (url = `https://api.openweathermap.org/data/2.5/forecast?lat=54.68&lon=25.27&appid=${apiKey}&units=metric`);
  const { data, loading } = useFetch(url);

  useEffect(() => {
    if (!loading) {
      const filteredApiData = getData(data);
      setApiData(filteredApiData);
      setDataFiltered(true);
    }
  }, [data, loading]);

  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <CitySelection setName={setCityName} />
      <CurrentWeather props={apiData} />
      <WeatherCardList props={apiData} />
    </div>
  );
}

export default App;
