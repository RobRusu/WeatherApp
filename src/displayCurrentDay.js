import { getData } from "./WeatherAPI-Data";
import { displayPlace } from "./today_forecast/placeAndTime";
import { displayTemperature } from "./today_forecast/temperature";
import { displayMisc } from "./today_forecast/miscForecast";

export async function todayForecast() {
  const err = document.querySelector(".errorMessage");
  try {
    let location = document.querySelector("#location").value;
    let data;
    if (!location) {
      data = await getData("London");
    } else {
      data = await getData(location);
    }
    err.textContent = "";

    displayPlace(data);
    displayTemperature(data);
    displayMisc(data);
  } catch (error) {
    err.textContent = "Location not found.";
    console.error(error);
  }
}
