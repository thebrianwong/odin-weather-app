import { filterData } from "./filter_data_module";

const DOMManipulation = (() => {
  let timer = false;
  const addWeatherIcon = (weatherData) => {
    const weatherIcon = filterData.getWeatherIconCode(weatherData);
    const weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherIcon}@4x.png`;
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
    weatherIconElement.src = "../dist/mickey.png";
    weatherMainElement.textContent = "The sun might or might not be visible";
    weatherDescriptionElement.textContent = "hopefully the sky is still blue";
    tempFElement.textContent = "Larger number°F";
    tempCElement.textContent = "Smaller number°C";
    cityNameElement.textContent = "Disneyland";
  };
  const changeErrorMessage = (message) => {
    const errorMessageElement = document.querySelector(".error-message");
    errorMessageElement.textContent = message;
  };
  const toggleSubmissionElementsEnabled = () => {
    const submissionElements = Array.from(
      document.querySelectorAll(".submission-element")
    );
    submissionElements.forEach((element) => {
      if (element.disabled === false) {
        element.disabled = true;
      } else {
        element.disabled = false;
      }
    });
  };
  const toggleElementDisplay = (element) => {
    element.classList.toggle("not-displayed");
  };
  const changeLoadingMessage = (message) => {
    const loadingMessage = document.querySelector(".loading-message");
    loadingMessage.textContent = message;
  };
  const waitTimer = (duration) =>
    new Promise((response) => setTimeout(response, duration));
  const toggleLoadingMessageCycle = async (loadingMessage) => {
    const loadingIndicator = document.querySelector("#loading-indicator");
    timer ? (timer = false) : (timer = true);
    while (timer) {
      changeLoadingMessage(`${loadingMessage}...`);
      await waitTimer(1000);
      if (Array.from(loadingIndicator.classList).includes("not-displayed")) {
        changeLoadingMessage(`${loadingMessage}...`);
        break;
      }
      changeLoadingMessage(`${loadingMessage}.`);
      await waitTimer(1000);
      if (Array.from(loadingIndicator.classList).includes("not-displayed")) {
        changeLoadingMessage(`${loadingMessage}...`);
        break;
      }
      changeLoadingMessage(`${loadingMessage}..`);
      await waitTimer(1000);
      changeLoadingMessage(`${loadingMessage}...`);
    }
  };
  const toggleLoadingInProgress = (loadingMessage) => {
    const loadingIndicator = document.querySelector("#loading-indicator");
    toggleSubmissionElementsEnabled();
    toggleElementDisplay(loadingIndicator);
    toggleLoadingMessageCycle(loadingMessage);
  };
  const resetError = () => {
    const errorMessageElement = document.querySelector(".error-message");
    if (!Array.from(errorMessageElement.classList).includes("not-displayed")) {
      errorMessageElement.classList.add("not-displayed");
    }
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
    changeErrorMessage,
    toggleElementDisplay,
    toggleLoadingInProgress,
    resetError,
  };
})();

export { DOMManipulation };
