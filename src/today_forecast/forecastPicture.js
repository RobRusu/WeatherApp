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

export function determinePicture(forecast) {
  if (forecast.isDay == 1) {
    if (forecast.forecast === "Sunny") {
      return sunny;
    } else if (forecast.forecast === "Partly cloudy") {
      return partlyCloudy;
    } else if (
      forecast.forecast === "Cloudy" ||
      forecast.forecast === "Overcast"
    ) {
      return cloudyDay;
    } else if (forecast.forecast === "Mist") {
      return mist;
    } else if (
      forecast.forecast === "Patchy rain possible" ||
      forecast.forecast === "Patchy freezing drizzle possible" ||
      forecast.forecast === "Patchy light drizzle" ||
      forecast.forecast === "Light drizzle" ||
      forecast.forecast === "Freezing drizzle" ||
      forecast.forecast === "Heavy freezing drizzle" ||
      forecast.forecast === "Patchy light rain" ||
      forecast.forecast === "Light rain" ||
      forecast.forecast === "Moderate rain at times" ||
      forecast.forecast === "Moderate rain" ||
      forecast.forecast === "Heavy rain at times" ||
      forecast.forecast === "Heavy rain" ||
      forecast.forecast === "Light freezing rain" ||
      forecast.forecast === "Moderate or heavy freezing rain" ||
      forecast.forecast === "Ice pellets" ||
      forecast.forecast === "Light rain shower" ||
      forecast.forecast === "Moderate or heavy rain shower" ||
      forecast.forecast === "Torrential rain shower" ||
      forecast.forecast === "Light showers of ice pellets" ||
      forecast.forecast === "Moderate or heavy showers of ice pellets"
    ) {
      return rain;
    } else if (
      forecast.forecast === "Patchy snow possible" ||
      forecast.forecast === "Blowing snow" ||
      forecast.forecast === "Blizzard" ||
      forecast.forecast === "Patchy light snow" ||
      forecast.forecast === "Light snow" ||
      forecast.forecast === "Patchy moderate snow" ||
      forecast.forecast === "Moderate snow" ||
      forecast.forecast === "Patchy heavy snow" ||
      forecast.forecast === "Heavy snow" ||
      forecast.forecast === "Light snow showers" ||
      forecast.forecast === "Moderate or heavy snow showers"
    ) {
      return snow;
    } else if (
      forecast.forecast === "Patchy sleet possible" ||
      forecast.forecast === "Light sleet" ||
      forecast.forecast === "Moderate or heavy sleet" ||
      forecast.forecast === "Light sleet showers" ||
      forecast.forecast === "Moderate or heavy sleet showers"
    ) {
      return sleet;
    } else if (forecast.forecast === "Thundery outbreaks possible") {
      return thunder;
    } else if (
      forecast.forecast === "Fog" ||
      forecast.forecast === "Freezing fog"
    ) {
      return fog;
    } else if (
      forecast.forecast === "Patchy light rain with thunder" ||
      forecast.forecast === "Moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecast.forecast === "Patchy light snow with thunder" ||
      forecast.forecast === "Moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  } else {
    if (forecast.forecast === "Clear") {
      return clearNightSky;
    } else if (forecast.forecast === "Partly cloudy") {
      return cloudyNight;
    } else if (
      forecast.forecast === "Cloudy" ||
      forecast.forecast === "Overcast"
    ) {
      return cloudyDay;
    } else if (forecast.forecast === "Mist") {
      return mist;
    } else if (
      forecast.forecast === "Patchy rain possible" ||
      forecast.forecast === "Patchy freezing drizzle possible" ||
      forecast.forecast === "Patchy light drizzle" ||
      forecast.forecast === "Light drizzle" ||
      forecast.forecast === "Freezing drizzle" ||
      forecast.forecast === "Heavy freezing drizzle" ||
      forecast.forecast === "Patchy light rain" ||
      forecast.forecast === "Light rain" ||
      forecast.forecast === "Moderate rain at times" ||
      forecast.forecast === "Moderate rain" ||
      forecast.forecast === "Heavy rain at times" ||
      forecast.forecast === "Heavy rain" ||
      forecast.forecast === "Light freezing rain" ||
      forecast.forecast === "Moderate or heavy freezing rain" ||
      forecast.forecast === "Ice pellets" ||
      forecast.forecast === "Light rain shower" ||
      forecast.forecast === "Moderate or heavy rain shower" ||
      forecast.forecast === "Torrential rain shower" ||
      forecast.forecast === "Light showers of ice pellets" ||
      forecast.forecast === "Moderate or heavy showers of ice pellets"
    ) {
      return rainyNight;
    } else if (
      forecast.forecast === "Patchy snow possible" ||
      forecast.forecast === "Blowing snow" ||
      forecast.forecast === "Blizzard" ||
      forecast.forecast === "Patchy light snow" ||
      forecast.forecast === "Light snow" ||
      forecast.forecast === "Patchy moderate snow" ||
      forecast.forecast === "Moderate snow" ||
      forecast.forecast === "Patchy heavy snow" ||
      forecast.forecast === "Heavy snow" ||
      forecast.forecast === "Light snow showers" ||
      forecast.forecast === "Moderate or heavy snow showers"
    ) {
      return snowyNight;
    } else if (
      forecast.forecast === "Patchy sleet possible" ||
      forecast.forecast === "Light sleet" ||
      forecast.forecast === "Moderate or heavy sleet" ||
      forecast.forecast === "Light sleet showers" ||
      forecast.forecast === "Moderate or heavy sleet showers"
    ) {
      return sleetNight;
    } else if (forecast.forecast === "Thundery outbreaks possible") {
      return thunderAtNight;
    } else if (
      forecast.forecast === "Fog" ||
      forecast.forecast === "Freezing fog"
    ) {
      return fog;
    } else if (
      forecast.forecast === "Patchy light rain with thunder" ||
      forecast.forecast === "Moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecast.forecast === "Patchy light snow with thunder" ||
      forecast.forecast === "Moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  }
}
