import "./style.css";
import { forecast } from "./displayForecast";
import Search from "../src/img/search.png";

const searchLocation = document.querySelector(".searchLocation");
const searchInput = document.querySelector("#location");
searchLocation.src = Search;
searchLocation.alt = "Search";
searchLocation.addEventListener("click", forecast);
searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    forecast();
  }
});

forecast();
