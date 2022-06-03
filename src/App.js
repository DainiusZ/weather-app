import React, { useEffect, useState } from "react";
import WeatherCardList from "./components/WeatherCardList";
import getData from "./filterApiData";
import "./App.css";
import useFetch from "./useFetch";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [apiData, setApiData] = useState(null);
  const [isDataFiltered, setDataFiltered] = useState(false);
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=54.68&lon=25.27&appid=${apiKey}&units=metric`
  );

  useEffect(() => {
    if (!loading) {
      const ats = getData(data);
      setApiData(ats);
      setDataFiltered(true);
    }
  }, [data, loading]);

  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      {console.log("Component got data", apiData)}
      <WeatherCardList props={apiData} />
    </div>
  );
}

export default App;
