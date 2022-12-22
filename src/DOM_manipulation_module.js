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
  return { addWeatherIcon, addWeatherMain, addWeatherDescription };
})();

export { DOMManipulation };
