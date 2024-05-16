import "./style.css";
import { todayForecast } from "./displayCurrentDay";

const searchLocation = document.querySelector(".searchLocation");
searchLocation.addEventListener("click", todayForecast);
