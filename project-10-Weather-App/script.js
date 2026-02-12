const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("city");
const weatherDiv = document.getElementById("weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    showMessage("Please enter a city name", "error");
    return;
  }

  const apiKey = "6a527e9d74693cb608278bea3b474e34";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  showMessage("Loading...", "loading");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 404) {
      throw new Error("City not found ❌");
    }

    if (!response.ok) {
      throw new Error("Something went wrong. Try again.");
    }

    displayWeather(data);
  } catch (error) {
    showMessage(error.message, "error");
  }
}

function displayWeather(data) {
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;

  weatherDiv.innerHTML = `
    <article class="weather-card">
      <h2>${data.name}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
      <p class="desc">${description}</p>
      <div class="temp">${data.main.temp}°C</div>
      <div class="extra-info">
        <p>💨 Wind: ${data.wind.speed} km/h</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌡 Feels Like: ${data.main.feels_like}°C</p>
      </div>
    </article>
  `;

  cityInput.value = "";
}

function showMessage(message, type) {
  weatherDiv.innerHTML = `<p class="${type}">${message}</p>`;
  cityInput.value = "";
}
