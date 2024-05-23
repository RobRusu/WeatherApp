import { getData } from "./WeatherAPI-Data";
import { displayPlace } from "./forecast/placeAndTime";
import { displayTemperature } from "./forecast/temperature";
import { displayMisc } from "./forecast/miscForecast";
import { upcomingForecast } from "./forecast/futureForecast";

export async function forecast() {
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
    upcomingForecast(data);
  } catch (error) {
    err.textContent = "Location not found.";
    console.error(error);
  }
}
