import MinMax from "../img/minMax.png";
import { determinePicture } from "./forecastPicture";

export function displayTemperature(obj) {
  const temperature = document.querySelector(".temperature");
  temperature.textContent = "";
  const forecastPic = new Image();
  const tempAndForecast = document.createElement("div");
  tempAndForecast.classList.add("tempForecast");
  const temp = document.createElement("div");
  const forecast = document.createElement("div");
  const minMaxC = document.createElement("div");
  const minMaxF = document.createElement("div");
  const minMaxTemp = document.createElement("div");
  const minMaxFinal = document.createElement("div");
  const minMaxPic = new Image();

  forecastPic.alt = "Placeholder";
  forecastPic.src = determinePicture(obj);
  temp.textContent = `${obj.tempC} °C / ${obj.tempF} °F`;
  forecast.textContent = obj.forecast;
  minMaxFinal.classList.add("minMax");
  minMaxPic.src = MinMax;
  minMaxC.textContent = `${obj.todaysMinC} °C - ${obj.todaysMaxC} °C`;
  minMaxF.textContent = `${obj.todaysMinF} °F - ${obj.todaysMaxF} °F`;

  tempAndForecast.append(forecast, temp);
  minMaxTemp.append(minMaxC, minMaxF);
  minMaxFinal.append(minMaxPic, minMaxTemp);
  temperature.append(forecastPic, tempAndForecast, minMaxFinal);
}
