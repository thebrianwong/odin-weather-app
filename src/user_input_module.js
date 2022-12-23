import { APIRequest } from "./API_request_module";
import { filterData } from "./filter_data_module";
import { DOMManipulation } from "./DOM_manipulation_module";

const userInput = (() => {
  const submitUserInput = async () => {
    const cityInputValue = document.querySelector("#city").value;
    if (cityInputValue !== "") {
      try {
        const response = await APIRequest.getCityWeather(cityInputValue);
        DOMManipulation.updateDisplayedWeather(response);
      } catch (error) {
        DOMManipulation.addPlaceholderValues();
        console.error(Error(error.statusText));
      }
    }
  };
  const submitRandomInput = async () => {
    try {
      const cityResponse = await APIRequest.getRandomCity();
      const randomCityName = filterData.getRandomCityName(cityResponse);
      const weatherResponse = await APIRequest.getCityWeather(randomCityName);
      DOMManipulation.updateDisplayedWeather(weatherResponse);
    } catch (error) {
      DOMManipulation.addPlaceholderValues();
      console.error(Error(`${error.status} ${error.statusText}`));
    }
  };
  const addUserInputListener = () => {
    const searchButton = document.querySelector(".search-button");
    const cityInputElement = document.querySelector("#city");
    const randomButton = document.querySelector(".random-button");
    searchButton.addEventListener("click", submitUserInput);
    cityInputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        submitUserInput();
      }
    });
    randomButton.addEventListener("click", submitRandomInput);
  };
  return { addUserInputListener };
})();

export { userInput };
