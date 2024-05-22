export function displayPlace(obj) {
  const placeAndTime = document.querySelector(".placeAndTime");
  placeAndTime.textContent = "";
  const city = document.createElement("div");
  city.classList.add("city");
  const country = document.createElement("div");
  country.classList.add("place");
  const dateAndTime = document.createElement("div");
  dateAndTime.classList.add("place");
  const date = document.createElement("div");
  const time = document.createElement("div");

  city.textContent = obj.city;
  country.textContent = obj.country;
  date.textContent = obj.date;
  time.textContent = obj.time;

  dateAndTime.append(date, time);
  placeAndTime.append(city, country, dateAndTime);
}
