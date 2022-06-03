const dayTimeHour = "12";
const nightTimeHour = "03";

function getHourFromDate(date) {
  const splitedHour = date.split(" ")[1].split(":")[0];
  return filterOutDayAndNigtTimes(splitedHour);
}

function filterOutDayAndNigtTimes(time) {
  if (time === dayTimeHour) {
    return dayTimeHour;
  } else if (time === nightTimeHour) {
    return nightTimeHour;
  } else {
    return false;
  }
}

function getData(apiData) {
  if (!apiData) return;
  const weatherDataArray = [];
  let mergedDataObj = {};
  let filteredDataArray = [];
  let city = apiData.city.name;

  for (let item of apiData.list) {
    let key = item.dt;
    let date = Date.parse(item.dt_txt.split(" ")[0]);
    let dayTemp;
    let nightTemp;
    let rain;
    let rainIconUrl;
    let wind;
    for (let prop in item) {
      if (prop === "dt_txt") {
        let dayObj = {};
        let nightObj = {};
        if (getHourFromDate(item[prop]) === dayTimeHour) {
          dayTemp = Math.floor(item.main.temp_max);
          rain = item.weather[0].description;
          rainIconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
          wind = Math.round(item.wind.speed);
          dayObj = {
            key,
            date,
            city,
            dayTemp,
            rain,
            rainIconUrl,
            wind,
          };
          weatherDataArray.push(dayObj);
        } else if (getHourFromDate(item[prop]) === nightTimeHour) {
          nightTemp = Math.floor(item.main.temp_min);
          nightObj = { nightTemp };
          weatherDataArray.push(nightObj);
        }
      }
    }
  }
  weatherDataArray.forEach((item, i) => {
    //to save only data for subsequent night temp, no need to know what temp was last night (first array item)
    if (i === 0 && item.hasOwnProperty("nightTemp")) return;
    // save to newArr only when object has full properties - both day and night temps
    if (item.hasOwnProperty("nightTemp")) {
      let tempObj = { ...mergedDataObj, ...item };
      filteredDataArray.push(tempObj);
    } else {
      mergedDataObj = { ...item };
    }
  });
  return filteredDataArray;
}

export default getData;
