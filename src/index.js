import "./style.css";
import { todayForecast } from "./displayCurrentDay";
import Search from "../src/img/search.png";

const searchLocation = document.querySelector(".searchLocation");
searchLocation.src = Search;
searchLocation.alt = "Search";
searchLocation.addEventListener("click", todayForecast);

todayForecast();
