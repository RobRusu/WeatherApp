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
    } else if (forecastText == "partly cloudy") {
      return `url(${CloudyDay})`;
    } else if (forecastText === "cloudy" || forecastText === "overcast") {
      return `url(${CloudyDay})`;
    } else if (forecastText === "mist") {
      return `url(${MistFog})`;
    } else if (
      forecastText === "patchy rain possible" ||
      forecastText === "patchy freezing drizzle possible" ||
      forecastText === "patchy light drizzle" ||
      forecastText === "light drizzle" ||
      forecastText === "freezing drizzle" ||
      forecastText === "heavy freezing drizzle" ||
      forecastText === "patchy light rain" ||
      forecastText === "light rain" ||
      forecastText === "moderate rain at times" ||
      forecastText === "moderate rain" ||
      forecastText === "heavy rain at times" ||
      forecastText === "heavy rain" ||
      forecastText === "light freezing rain" ||
      forecastText === "moderate or heavy freezing rain" ||
      forecastText === "ice pellets" ||
      forecastText === "light rain shower" ||
      forecastText === "moderate or heavy rain shower" ||
      forecastText === "torrential rain shower" ||
      forecastText === "light showers of ice pellets" ||
      forecastText === "moderate or heavy showers of ice pellets" ||
      forecastText === "patchy rain nearby"
    ) {
      return `url(${RainyDay})`;
    } else if (
      forecastText === "patchy snow possible" ||
      forecastText === "blowing snow" ||
      forecastText === "blizzard" ||
      forecastText === "patchy light snow" ||
      forecastText === "light snow" ||
      forecastText === "patchy moderate snow" ||
      forecastText === "moderate snow" ||
      forecastText === "patchy heavy snow" ||
      forecastText === "heavy snow" ||
      forecastText === "light snow showers" ||
      forecastText === "moderate or heavy snow showers"
    ) {
      return `url(${SnowyDay})`;
    } else if (
      forecastText === "patchy sleet possible" ||
      forecastText === "light sleet" ||
      forecastText === "moderate or heavy sleet" ||
      forecastText === "light sleet showers" ||
      forecastText === "moderate or heavy sleet showers"
    ) {
      return `url(${RainyDay})`;
    } else if (forecastText === "thundery outbreaks possible") {
      return `url(${Thunder})`;
    } else if (forecastText === "fog" || forecastText === "freezing fog") {
      return `url(${MistFog})`;
    } else if (
      forecastText === "patchy light rain with thunder" ||
      forecastText === "moderate or heavy rain with thunder"
    ) {
      return `url(${Thunder})`;
    } else if (
      forecastText === "patchy light snow with thunder" ||
      forecastText === "moderate or heavy snow with thunder"
    ) {
      return `url(${Thunder})`;
    }
  } else {
    if (forecastText === "clear") {
      return `url(${NightSky})`;
    } else if (forecastText === "partly cloudy") {
      return `url(${CloudyNight})`;
    } else if (forecastText === "cloudy" || forecastText === "overcast") {
      return `url(${CloudyNight})`;
    } else if (forecastText === "mist") {
      return `url(${MistFog})`;
    } else if (
      forecastText === "patchy rain possible" ||
      forecastText === "patchy freezing drizzle possible" ||
      forecastText === "patchy light drizzle" ||
      forecastText === "light drizzle" ||
      forecastText === "freezing drizzle" ||
      forecastText === "heavy freezing drizzle" ||
      forecastText === "patchy light rain" ||
      forecastText === "light rain" ||
      forecastText === "moderate rain at times" ||
      forecastText === "moderate rain" ||
      forecastText === "heavy rain at times" ||
      forecastText === "heavy rain" ||
      forecastText === "light freezing rain" ||
      forecastText === "moderate or heavy freezing rain" ||
      forecastText === "ice pellets" ||
      forecastText === "light rain shower" ||
      forecastText === "moderate or heavy rain shower" ||
      forecastText === "torrential rain shower" ||
      forecastText === "light showers of ice pellets" ||
      forecastText === "moderate or heavy showers of ice pellets"
    ) {
      return `url(${RainyNight})`;
    } else if (
      forecastText === "patchy snow possible" ||
      forecastText === "blowing snow" ||
      forecastText === "blizzard" ||
      forecastText === "patchy light snow" ||
      forecastText === "light snow" ||
      forecastText === "patchy moderate snow" ||
      forecastText === "moderate snow" ||
      forecastText === "patchy heavy snow" ||
      forecastText === "heavy snow" ||
      forecastText === "light snow showers" ||
      forecastText === "moderate or heavy snow showers"
    ) {
      return `url(${SnowyNight})`;
    } else if (
      forecastText === "patchy sleet possible" ||
      forecastText === "light sleet" ||
      forecastText === "moderate or heavy sleet" ||
      forecastText === "light sleet showers" ||
      forecastText === "moderate or heavy sleet showers"
    ) {
      return `url(${RainyNight})`;
    } else if (forecastText === "thundery outbreaks possible") {
      return `url(${Thunder})`;
    } else if (forecastText === "fog" || forecastText === "freezing fog") {
      return `url(${MistFog})`;
    } else if (
      forecastText === "patchy light rain with thunder" ||
      forecastText === "moderate or heavy rain with thunder"
    ) {
      return `url(${Thunder})`;
    } else if (
      forecastText === "patchy light snow with thunder" ||
      forecastText === "moderate or heavy snow with thunder"
    ) {
      return `url(${Thunder})`;
    }
  }
}
