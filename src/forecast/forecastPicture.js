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
  forecastText = forecastText.toLowerCase();
  forecastText = forecastText.trim();

  if (forecastDay == 1) {
    if (forecastText === "sunny") {
      return sunny;
    } else if (forecastText === "partly cloudy") {
      return partlyCloudy;
    } else if (forecastText === "cloudy" || forecastText === "overcast") {
      return cloudyDay;
    } else if (forecastText === "mist") {
      return mist;
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
      return rain;
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
      return snow;
    } else if (
      forecastText === "patchy sleet possible" ||
      forecastText === "light sleet" ||
      forecastText === "moderate or heavy sleet" ||
      forecastText === "light sleet showers" ||
      forecastText === "moderate or heavy sleet showers"
    ) {
      return sleet;
    } else if (forecastText === "thundery outbreaks possible") {
      return thunder;
    } else if (forecastText === "fog" || forecastText === "freezing fog") {
      return fog;
    } else if (
      forecastText === "patchy light rain with thunder" ||
      forecastText === "moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecastText === "patchy light snow with thunder" ||
      forecastText === "moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  } else {
    if (forecastText === "clear") {
      return clearNightSky;
    } else if (forecastText === "partly cloudy") {
      return cloudyNight;
    } else if (forecastText === "cloudy" || forecastText === "overcast") {
      return cloudyDay;
    } else if (forecastText === "mist") {
      return mist;
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
      return rainyNight;
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
      return snowyNight;
    } else if (
      forecastText === "patchy sleet possible" ||
      forecastText === "light sleet" ||
      forecastText === "moderate or heavy sleet" ||
      forecastText === "light sleet showers" ||
      forecastText === "moderate or heavy sleet showers"
    ) {
      return sleetNight;
    } else if (forecastText === "thundery outbreaks possible") {
      return thunderAtNight;
    } else if (forecastText === "fog" || forecastText === "freezing fog") {
      return fog;
    } else if (
      forecastText === "patchy light rain with thunder" ||
      forecastText === "moderate or heavy rain with thunder"
    ) {
      return thunderWithRain;
    } else if (
      forecastText === "patchy light snow with thunder" ||
      forecastText === "moderate or heavy snow with thunder"
    ) {
      return thunderWithSnow;
    }
  }
}
