import React, { useEffect, useState } from "react";
import getData from "./filterApiData";
import "./App.css";
import useFetch from "./useFetch";
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [apiData, setApiData] = useState([]);
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=54.68&lon=25.27&appid=${apiKey}&units=metric`
  );
  useEffect(() => {
    console.log("returned data", data);
    const ats = getData(data);
    setApiData(ats);
    console.log("returned data 2", data);
  }, [data]);

  return loading ? <h1>Loading...</h1> : console.log("got it", apiData);
  <div className="App"></div>;
}

export default App;
