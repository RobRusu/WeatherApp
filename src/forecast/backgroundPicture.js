import Sunny from "../img/sunnyWeather.jpg";
import RainyDay from "../img/rainyWeather.jpg";
import CloudyNight from "../img/cloudyNight.jpg";
import CloudyDay from "../img/cloudyWeather.jpg";
import MistFog from "../img/mistyWeather.jpg";
import NightSky from "../img/nightSky.jpg";
import SnowyNight from "../img/snowyNight.jpg";
import Thunder from "../img/thunderWeather.jpg";
import RainyNight from "../img/rainyNight.jpg";
import SnowyDay from "../img/snowyWeather.jpg";

export function determineBackground(forecastDay, forecastText) {
  forecastText = forecastText.toLowerCase();
  forecastText = forecastText.trim();

  if (forecastDay == 1) {
    if (forecastText === "sunny") {
      return `url(${Sunny})`;
    } else if (forecastText.includes("cloudy") || forecastText === "overcast") {
      return `url(${CloudyDay})`;
    } else if (forecastText.includes("fog") || forecastText === "mist") {
      return `url(${MistFog})`;
    } else if (forecastText.includes("snow") || forecastText === "blizzard") {
      return `url(${SnowyDay})`;
    } else if (forecastText.includes("thunder")) {
      return `url(${Thunder})`;
    } else {
      return `url(${RainyDay})`;
    }
  } else {
    if (forecastText === "clear") {
      return `url(${NightSky})`;
    } else if (forecastText.includes("cloudy") || forecastText === "overcast") {
      return `url(${CloudyNight})`;
    } else if (forecastText.includes("fog") || forecastText === "mist") {
      return `url(${MistFog})`;
    } else if (forecastText.includes("snow") || forecastText === "blizzard") {
      return `url(${SnowyNight})`;
    } else if (forecastText.includes("thunder")) {
      return `url(${Thunder})`;
    } else {
      return `url(${RainyNight})`;
    }
  }
}
