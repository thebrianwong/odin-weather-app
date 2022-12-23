import { filterData } from "./filter_data_module";

const DOMManipulation = (() => {
  const addWeatherIcon = (weatherData) => {
    const weatherIcon = filterData.getWeatherIconCode(weatherData);
    const weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  };
  const addWeatherMain = (weatherData) => {
    const weatherMain = filterData.getWeatherMain(weatherData);
    const weatherMainElement = document.querySelector(".weather-main");
    weatherMainElement.textContent = weatherMain;
  };
  const addWeatherDescription = (weatherData) => {
    const weatherDescription = filterData.getWeatherDescription(weatherData);
    const weatherDescriptionElement = document.querySelector(
      ".weather-description"
    );
    weatherDescriptionElement.textContent = weatherDescription;
  };
  const addTemperatureFahrenheit = (weatherData) => {
    const tempF = filterData.getTemperatureFahrenheit(weatherData);
    const tempFElement = document.querySelector(".temp-f");
    tempFElement.textContent = `${tempF}°F`;
  };
  const addTemperatureCelsius = (weatherData) => {
    const tempC = filterData.getTemperatureCelsius(weatherData);
    const tempCElement = document.querySelector(".temp-c");
    tempCElement.textContent = `${tempC}°C`;
  };
  const addCityName = (weatherData) => {
    const cityName = filterData.getCityName(weatherData);
    const cityNameElement = document.querySelector(".city-name");
    cityNameElement.textContent = cityName;
  };
  const resetInputValue = () => {
    const cityInputElement = document.querySelector("#city");
    cityInputElement.value = "";
  };
  const addPlaceholderValues = () => {
    const weatherIconElement = document.querySelector(".weather-icon");
    const weatherMainElement = document.querySelector(".weather-main");
    const weatherDescriptionElement = document.querySelector(
      ".weather-description"
    );
    const tempFElement = document.querySelector(".temp-f");
    const tempCElement = document.querySelector(".temp-c");
    const cityNameElement = document.querySelector(".city-name");
    weatherIconElement.src = "../mickey.png";
    weatherMainElement.textContent = "The sun might or might not be visible";
    weatherDescriptionElement.textContent = "hopefully the sky is still blue";
    tempFElement.textContent = "Larger number°F";
    tempCElement.textContent = "Smaller number°C";
    cityNameElement.textContent = "Disneyland";
  };
  const updateDisplayedWeather = (weatherData) => {
    addWeatherIcon(weatherData);
    addWeatherMain(weatherData);
    addWeatherDescription(weatherData);
    addTemperatureFahrenheit(weatherData);
    addTemperatureCelsius(weatherData);
    addCityName(weatherData);
    resetInputValue();
  };
  return {
    updateDisplayedWeather,
    addPlaceholderValues,
  };
})();

export { DOMManipulation };
