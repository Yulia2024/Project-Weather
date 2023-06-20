function displayWheatherCondition(response) {
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${response.data.name}`;

  let temp = Math.round(response.data.main.temp);
  let currentWeather = document.querySelector("#currentTemp");
  currentWeather.innerHTML = `The temperature is ${temp}°C`;
  let wind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#currentWind");
  currentWind.innerHTML = `The wind is ${wind} mph`;
  let humidity = Math.round(response.data.main.humidity);
  let currentHumidity = document.querySelector("#currentHumidity");
  currentHumidity.innerHTML = `The humidity is ${humidity}%`;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(event) {
  event.preventDefault();
  let apiKey = "572d4e13399858af752a88640c3a56dd";
  let city = document.querySelector("#text").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWheatherCondition);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

let time = new Date();
let day = time.getDay();
let hours = time.getHours();
let minutes = time.getMinutes();
let today = document.querySelector(".time");
if (day === 0) {
  day = "Sunday";
}
if (day === 1) {
  day = "Monday";
}
if (day === 2) {
  day = "Tuesday";
}
if (day === 3) {
  day = "Wednesday";
}
if (day === 4) {
  day = "Thursday";
}
if (day === 5) {
  day = "Friday";
}
if (day === 6) {
  day = "Saturday";
}

today.innerHTML = `${day} ${hours}:${minutes}`;
