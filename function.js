const container = document.querySelector(".container");
const search = document.querySelector(".search-box");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const weatherError = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const API = "7a1c7eb2aa9098c4fa28542c50cd383d";
  const city = document.querySelector(".search-box input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

  if (city === "") return;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.cod === "404") {
        container.style.height = "500px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        weatherError.style.display = "block";
        weatherError.classList.add("fadeIn");
        return;
      }
      console.log("found");
      weatherError.style.display = "none";
      weatherError.classList.remove("fadeIn");

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;

        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Haze":
          image.src = "images/mist.png";
          break;

        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
      humidity.innerHTML = `${json.main.humidity}%`;
      description.innerHTML = `${json.weather[0].description}`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      container.style.height = "600px";
      weatherBox.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.style.display = "";
      weatherDetails.classList.add("fadeIn");
    });
});
