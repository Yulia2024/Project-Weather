function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let forecast = response.data.daily;
  forecast.forEach(function (forecastDay) {
    forecastHTML += `
  
          <div class="col-2">
            <div class="weather-forecast-date">${forecastDay.dt}</div>
            <img
              src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
              alt=""
              width="42"
            />
            <div class="weather-forecast-temperature">
              <span class="weather-forecast-temperature-max"> ${forecastDay.temp.max}° </span>
              <span class="weather-forecast-temperature-min"> ${forecastDay.temp.min}° </span>
            </div>
          </div>
          
        `;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "572d4e13399858af752a88640c3a56dd";
  let apiLink = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiLink).then(displayForecast);
}
function displayWheatherCondition(response) {
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${response.data.name}`;

  let temp = Math.round(response.data.main.temp);
  let currentWeather = document.querySelector("#currentTemp");
  currentWeather.innerHTML = `The temperature is ${temp}°C`;
  let wind = Math.round(response.data.wind.speed);
  let currentWind = document.querySelector("#currentWind");
  currentWind.innerHTML = `The wind is ${wind} kmh`;
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
  getForecast(response.data.coord);
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
