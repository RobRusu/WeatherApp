import { Weather } from "./weatherClass";

export async function getData(location) {
  const result = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=57c86726b8484f64b8f102529240505&q=${location}&days=3`,
    { mode: "cors" }
  );

  let data = await result.json();
  const weather = new Weather(
    data.location.country,
    data.location.localtime,
    data.location.name,
    data.location.region,
    data.current.feelslike_c,
    data.current.feelslike_f,
    data.current.gust_kph,
    data.current.gust_mph,
    data.current.humidity,
    data.current.temp_c,
    data.current.temp_f,
    data.current.condition.text
  );

  const dateAndTime = weather.splitDate(data.location.localtime);
  weather.date = dateAndTime[0];
  weather.time = dateAndTime[1];

  return weather;
}
