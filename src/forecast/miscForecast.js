import FeelsLike from "../img/feelsLike.png";
import WindSpeed from "../img/wind.png";
import Humidity from "../img/humidity.png";
import Rain from "../img/rainy.png";

export function displayMisc(obj) {
  const misc = document.querySelector(".miscForecast");
  misc.textContent = "";

  const feels = document.createElement("div");
  feels.classList.add("feels");
  const feelsCFPic = new Image();
  feelsCFPic.src = FeelsLike;
  const feelsCF = document.createElement("div");
  const feelsCFDescription = document.createElement("div");
  feelsCFDescription.textContent = "Feels like";
  const feelsCFValue = document.createElement("div");
  feelsCF.append(feelsCFDescription, feelsCFValue);
  feels.append(feelsCFPic, feelsCF);

  const wind = document.createElement("div");
  wind.classList.add("wind");
  const windPic = new Image();
  windPic.src = WindSpeed;
  const windKM = document.createElement("div");
  const windKMDescription = document.createElement("div");
  windKMDescription.textContent = "Wind Speed";
  const windKMValue = document.createElement("div");
  windKM.append(windKMDescription, windKMValue);
  wind.append(windPic, windKM);

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  const humidityPic = new Image();
  humidityPic.src = Humidity;
  const humidityPercent = document.createElement("div");
  const humidityPercentDescription = document.createElement("div");
  humidityPercentDescription.textContent = "Humidity";
  const humidityPercentValue = document.createElement("div");
  humidityPercent.append(humidityPercentDescription, humidityPercentValue);
  humidity.append(humidityPic, humidityPercent);

  const rain = document.createElement("div");
  rain.classList.add("rain");
  const rainPic = new Image();
  rainPic.src = Rain;
  const rainChance = document.createElement("div");
  const rainChanceDescription = document.createElement("div");
  rainChanceDescription.textContent = "Chance of Rain";
  const rainChanceValue = document.createElement("div");
  rainChance.append(rainChanceDescription, rainChanceValue);
  rain.append(rainPic, rainChance);

  feelsCFValue.textContent = `${obj.feelsC} °C / ${obj.feelsF} °F`;
  windKMValue.textContent = `${obj.windKPH}kph / ${obj.windMPH}mph`;
  humidityPercentValue.textContent = `${obj.humidity}%`;
  rainChanceValue.textContent = `${obj.todayRainChance}%`;

  misc.append(feels, wind, humidity, rain);
}
