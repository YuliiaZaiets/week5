import "./styles.css";
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", search);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function followFahrenheit() {
  let currentFahrenheitTemp = document.querySelector(".temperature");
  currentFahrenheitTemp.innerHTML = `66`;
}
let followLink = document.querySelector("#fahrenheit-link");
followLink.addEventListener("click", followFahrenheit);

function followCelsius() {
  let currentCelsiusTemp = document.querySelector(".temperature");
  currentCelsiusTemp.innerHTML = `19`;
}
let followSecondLink = document.querySelector("#celsius-link");
followSecondLink.addEventListener("click", followCelsius);
