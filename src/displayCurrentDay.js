import { getData } from "./WeatherAPI-Data";

export async function todayForecast() {
  let location = document.querySelector("#location").value;
  const forecast = document.querySelector(".todayForecast");
  const data = await getData(location);
  forecast.textContent = "";
  for (const property in data) {
    let div = document.createElement("div");
    div.classList.add(property);
    div.textContent = `${property}: ${data[property]}`;
    forecast.appendChild(div);
  }
}
