import clearNightSky from "../img/forecast/clearNightSky.png";
import cloudy from "../img/forecast/cloudyDay.png";
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
      return cloudy;
    } else if (forecastText === "mist") {
      return mist;
    } else if (forecastText.includes("snow with thunder")) {
      return thunderWithSnow;
    } else if (forecastText.includes("snow") || forecastText === "blizzard") {
      return snow;
    } else if (forecastText.includes("sleet")) {
      return sleet;
    } else if (forecastText === "thundery outbreaks possible") {
      return thunder;
    } else if (forecastText.includes("fog")) {
      return fog;
    } else if (forecastText.includes("rain with thunder")) {
      return thunderWithRain;
    } else {
      return rain;
    }
  } else {
    if (forecastText === "clear") {
      return clearNightSky;
    } else if (forecastText === "partly cloudy") {
      return cloudyNight;
    } else if (forecastText === "cloudy" || forecastText === "overcast") {
      return cloudy;
    } else if (forecastText === "mist") {
      return mist;
    } else if (forecastText.includes("snow with thunder")) {
      return thunderWithSnow;
    } else if (forecastText.includes("snow") || forecastText === "blizzard") {
      return snowyNight;
    } else if (forecastText.includes("sleet")) {
      return sleetNight;
    } else if (forecastText === "thundery outbreaks possible") {
      return thunderAtNight;
    } else if (forecastText.includes("fog")) {
      return fog;
    } else if (forecastText.includes("rain with thunder")) {
      return thunderWithRain;
    } else {
      return rainyNight;
    }
  }
}
