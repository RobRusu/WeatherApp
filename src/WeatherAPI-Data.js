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
  weather.date = `${weather.date} - ${determineDay(data.location.localtime)}`;

  weather.tempC = Math.round(weather.tempC);
  weather.tempF = Math.round(weather.tempF);
  weather.todaysMaxC = Math.round(weather.todaysMaxC);
  weather.todaysMaxF = Math.round(weather.todaysMaxF);
  weather.todaysMinC = Math.round(weather.todaysMinC);
  weather.todaysMinF = Math.round(weather.todaysMinF);
  weather.feelsC = Math.round(weather.feelsC);
  weather.feelsF = Math.round(weather.feelsF);
  weather.windKPH = Math.round(weather.windKPH);
  weather.windMPH = Math.round(weather.windMPH);
  weather.dayAfterMaxC = Math.round(weather.dayAfterMaxC);
  weather.dayAfterMaxF = Math.round(weather.dayAfterMaxF);
  weather.dayAfterMinC = Math.round(weather.dayAfterMinC);
  weather.dayAfterMinF = Math.round(weather.dayAfterMinF);
  weather.tomorrowMaxC = Math.round(weather.tomorrowMaxC);
  weather.tomorrowMaxF = Math.round(weather.tomorrowMaxF);
  weather.tomorrowMinC = Math.round(weather.tomorrowMinC);
  weather.tomorrowMinF = Math.round(weather.tomorrowMinF);

  return weather;
}
