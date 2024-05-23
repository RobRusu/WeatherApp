import clearNightSky from "../img/forecast/clearNightSky.png";
import cloudyDay from "../img/forecast/cloudyDay.png";
import cloudyNight from "../img/forecast/cloudyNight.png";
import fog from "../img/forecast/fog.png";
import mist from "../img/forecast/mist.png";
import partlyCloudy from "../img/forecast/partlyCloudy.png";
import rainyNight from "../img/forecast/rainyNight.png";
import rain from "../img/rainy.png";
import sleet from "../img/forecast/sleet.png";
import sleetNight from "../img/forecast/sleetNight.png";
import snow from "../img/forecast/snow.png";
import snowyNight from "../img/forecast/snowyNight.png";
import sunny from "../img/forecast/sunny.png";
import thunder from "../img/forecast/thunder.png";
import thunderAtNight from "../img/forecast/thunderAtNight.png";
import thunderWithRain from "../img/forecast/thunderWithRain.png";
import thunderWithSnow from "../img/forecast/thunderWithSnow.png";

export function determinePicture(forecastDay, forecastText) {
  if (forecastDay == 1) {
    if (forecastText === "Sunny") {
      return sunny;
    } else if (
      forecastText === "Partly cloudy" ||
      forecastText === "Partly Cloudy "
    ) {
      return partlyCloudy;
    } else if (forecastText === "Cloudy" || forecastText === "Overcast") {
      return cloudyDay;
    } else if (forecastText === "Mist") {
      return mist;
    } else if (
      forecastText === "Patchy rain possible" ||
      forecastText === "Patchy freezing drizzle possible" ||
      forecastText === "Patchy light drizzle" ||
      forecastText === "Light drizzle" ||
      forecastText === "Freezing drizzle" ||
      forecastText === "Heavy freezing drizzle" ||
      forecastText === "Patchy light rain" ||
      forecastText === "Light rain" ||
      forecastText === "Moderate rain at times" ||
      forecastText === "Moderate rain" ||
      forecastText === "Heavy rain at times" ||
      forecastText === "Heavy rain" ||
      forecastText === "Light freezing rain" ||
      forecastText === "Moderate or heavy freezing rain" ||
      forecastText === "Ice pellets" ||
      forecastText === "Light rain shower" ||
      forecastText === "Moderate or heavy rain shower" ||
      forecastText === "Torrential rain shower" ||
      forecastText === "Light showers of ice pellets" ||
      forecastText === "Moderate or heavy showers of ice pellets" ||
      forecastText === "Patchy rain nearby"
    ) {
      return rain;
    } else if (
      forecastText === "Patchy snow possible" ||
      forecastText === "Blowing snow" ||
      forecastText === "Blizzard" ||
      forecastText === "Patchy light snow" ||
      forecastText === "Light snow" ||
      forecastText === "Patchy moderate snow" ||
      forecastText === "Moderate snow" ||
      forecastText === "Patchy heavy snow" ||
      forecastText === "Heavy snow" ||
      forecastText === "Light snow showers" ||
      forecastText === "Moderate or heavy snow showers"
    ) {
      return snow;
    } else if (
      forecastText === "Patchy sleet possible" ||
      forecastText === "Light sleet" ||
      forecastText === "Moderate or heavy sleet" ||
      forecastText === "Light sleet showers" ||
      forecastText === "Moderate or heavy sleet showers"
    ) {
      return sleet;
    } else if (forecastText === "Thundery outbreaks possible") {
      return thunder;
    } else if (forecastText === "Fog" || forecastText === "Freezing fog") {
      return fog;
    } else if (
      forecastText === "Patchy light rain with thunder" ||
      forecastText === "Moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecastText === "Patchy light snow with thunder" ||
      forecastText === "Moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  } else {
    if (forecastText === "Clear") {
      return clearNightSky;
    } else if (forecastText === "Partly cloudy") {
      return cloudyNight;
    } else if (forecastText === "Cloudy" || forecastText === "Overcast") {
      return cloudyDay;
    } else if (forecastText === "Mist") {
      return mist;
    } else if (
      forecastText === "Patchy rain possible" ||
      forecastText === "Patchy freezing drizzle possible" ||
      forecastText === "Patchy light drizzle" ||
      forecastText === "Light drizzle" ||
      forecastText === "Freezing drizzle" ||
      forecastText === "Heavy freezing drizzle" ||
      forecastText === "Patchy light rain" ||
      forecastText === "Light rain" ||
      forecastText === "Moderate rain at times" ||
      forecastText === "Moderate rain" ||
      forecastText === "Heavy rain at times" ||
      forecastText === "Heavy rain" ||
      forecastText === "Light freezing rain" ||
      forecastText === "Moderate or heavy freezing rain" ||
      forecastText === "Ice pellets" ||
      forecastText === "Light rain shower" ||
      forecastText === "Moderate or heavy rain shower" ||
      forecastText === "Torrential rain shower" ||
      forecastText === "Light showers of ice pellets" ||
      forecastText === "Moderate or heavy showers of ice pellets"
    ) {
      return rainyNight;
    } else if (
      forecastText === "Patchy snow possible" ||
      forecastText === "Blowing snow" ||
      forecastText === "Blizzard" ||
      forecastText === "Patchy light snow" ||
      forecastText === "Light snow" ||
      forecastText === "Patchy moderate snow" ||
      forecastText === "Moderate snow" ||
      forecastText === "Patchy heavy snow" ||
      forecastText === "Heavy snow" ||
      forecastText === "Light snow showers" ||
      forecastText === "Moderate or heavy snow showers"
    ) {
      return snowyNight;
    } else if (
      forecastText === "Patchy sleet possible" ||
      forecastText === "Light sleet" ||
      forecastText === "Moderate or heavy sleet" ||
      forecastText === "Light sleet showers" ||
      forecastText === "Moderate or heavy sleet showers"
    ) {
      return sleetNight;
    } else if (forecastText === "Thundery outbreaks possible") {
      return thunderAtNight;
    } else if (forecastText === "Fog" || forecastText === "Freezing fog") {
      return fog;
    } else if (
      forecastText === "Patchy light rain with thunder" ||
      forecastText === "Moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecastText === "Patchy light snow with thunder" ||
      forecastText === "Moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  }
}
