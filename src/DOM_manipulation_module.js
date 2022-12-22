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
  return {
    addWeatherIcon,
    addWeatherMain,
    addWeatherDescription,
    addTemperatureFahrenheit,
    addTemperatureCelsius,
    addCityName,
  };
})();

export { DOMManipulation };
