import "./style.css";
import { forecast } from "./displayForecast";
import Search from "../src/img/search.png";

const searchLocation = document.querySelector(".searchLocation");
searchLocation.src = Search;
searchLocation.alt = "Search";
searchLocation.addEventListener("click", forecast);

forecast();
