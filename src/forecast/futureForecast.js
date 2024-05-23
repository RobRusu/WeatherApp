import { determinePicture } from "./forecastPicture";
import { determineDay } from "../determineWeekday";

export function upcomingForecast(obj) {
  obj.tomorrowDate = determineDay(obj.tomorrowDate);
  obj.dayAfterDate = determineDay(obj.dayAfterDate);

  const dayOne = document.querySelector(".dayOne");
  const dayTwo = document.querySelector(".dayTwo");
  //empty the elements before generating data
  dayOne.textContent = "";
  dayTwo.textContent = "";

  const weekDayOne = document.createElement("div");
  weekDayOne.classList.add("weekDay");
  const maxMinOne = document.createElement("div");
  const forecastOne = document.createElement("div");
  forecastOne.classList.add("futureForecast");

  const weekDayTwo = document.createElement("div");
  weekDayTwo.classList.add("weekDay");
  const maxMinTwo = document.createElement("div");
  const forecastTwo = document.createElement("div");
  forecastTwo.classList.add("futureForecast");

  //Weekday
  weekDayOne.textContent = obj.tomorrowDate;
  weekDayTwo.textContent = obj.dayAfterDate;

  //Max and Min temperature
  const maxOne = document.createElement("div");
  maxOne.classList.add("max");
  const minOne = document.createElement("div");
  minOne.classList.add("min");
  const maxTwo = document.createElement("div");
  maxTwo.classList.add("max");
  const minTwo = document.createElement("div");
  minTwo.classList.add("min");
  maxOne.textContent = `${obj.tomorrowMaxC} °C / ${obj.tomorrowMaxF} °F`;
  minOne.textContent = `${obj.tomorrowMinC} °C / ${obj.tomorrowMinF} °F`;
  maxTwo.textContent = `${obj.dayAfterMaxC} °C / ${obj.dayAfterMaxF} °F`;
  minTwo.textContent = `${obj.dayAfterMinC} °C / ${obj.dayAfterMinF} °F`;

  maxMinOne.append(maxOne, minOne);
  maxMinTwo.append(maxTwo, minTwo);

  //Forecast (picture + text)
  const forecastPicOne = new Image();
  const forecastTextOne = document.createElement("div");
  const forecastPicTwo = new Image();
  const forecastTextTwo = document.createElement("div");

  forecastPicOne.src = determinePicture(1, obj.tomorrowForecast);
  forecastPicTwo.src = determinePicture(1, obj.dayAfterForecast);
  forecastTextOne.textContent = obj.tomorrowForecast;
  forecastTextTwo.textContent = obj.dayAfterForecast;

  forecastOne.append(forecastPicOne, forecastTextOne);
  forecastTwo.append(forecastPicTwo, forecastTextTwo);

  dayOne.append(weekDayOne, maxMinOne, forecastOne);
  dayTwo.append(weekDayTwo, maxMinTwo, forecastTwo);
}
