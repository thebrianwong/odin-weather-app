import { filterData } from "./filter_data_module";

const DOMManipulation = (() => {
  const addWeatherIcon = (weatherData) => {
    const weatherIcon = filterData.getWeatherIconCode(weatherData);
    const weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherIcon}.png`;
  };
  return { addWeatherIcon };
})();

export { DOMManipulation };
