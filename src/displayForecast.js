import { getData } from "./WeatherAPI-Data";
import { displayPlace } from "./forecast/placeAndTime";
import { displayTemperature } from "./forecast/temperature";
import { displayMisc } from "./forecast/miscForecast";
import { upcomingForecast } from "./forecast/futureForecast";
import { determineBackground } from "./forecast/backgroundPicture";

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
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage = determineBackground(
      data.isDay,
      data.forecast
    );
  } catch (error) {
    err.textContent = "Location not found.";
  }
}
