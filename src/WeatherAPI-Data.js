import { Weather } from "./weatherClass";
import { format } from "date-fns";
import { determineDay } from "./determineWeekday";

export async function getData(location) {
  const result = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=46ec1928d8cc4dcf977230638242105&q=${location}&days=3`,
    { mode: "cors" }
  );

  let data = await result.json();
  const weather = new Weather(
    data.location.country,
    data.location.localtime,
    data.forecast.forecastday[1].date,
    data.forecast.forecastday[2].date,
    data.location.name,
    data.current.feelslike_c,
    data.current.feelslike_f,
    data.current.gust_kph,
    data.current.gust_mph,
    data.current.humidity,
    data.current.temp_c,
    data.current.temp_f,
    data.current.is_day,
    data.current.condition.text,
    data.forecast.forecastday[1].day.condition.text,
    data.forecast.forecastday[2].day.condition.text,
    data.forecast.forecastday[0].day.mintemp_c,
    data.forecast.forecastday[0].day.maxtemp_c,
    data.forecast.forecastday[0].day.mintemp_f,
    data.forecast.forecastday[0].day.maxtemp_f,
    data.forecast.forecastday[1].day.mintemp_c,
    data.forecast.forecastday[1].day.maxtemp_c,
    data.forecast.forecastday[1].day.mintemp_f,
    data.forecast.forecastday[1].day.maxtemp_f,
    data.forecast.forecastday[2].day.mintemp_c,
    data.forecast.forecastday[2].day.maxtemp_c,
    data.forecast.forecastday[2].day.mintemp_f,
    data.forecast.forecastday[2].day.maxtemp_f,
    data.forecast.forecastday[0].day.daily_chance_of_rain
  );

  const dateAndTime = weather.splitDate(data.location.localtime);
  weather.date = dateAndTime[0];
  weather.time = dateAndTime[1];
  weather.date = format(new Date(weather.date), "dd/MM/yy");
  // weather.tomorrowDate = determineDay(weather.tomorrowDate);
  // weather.dayAfterDate = determineDay(weather.dayAfterDate);
  console.log(data);
  console.log(weather);
  return weather;
}
