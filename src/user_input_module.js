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
        DOMManipulation.changeErrorMessage(
          "Uh oh, looks like something went wrong! Check your spelling then try again!"
        );
        console.error(Error(error.statusText));
      }
    }
  };
  const submitRandomInput = async () => {
    let randomCityName;
    let weatherResponse;
    const randomButton = document.querySelector(".random-button");
    try {
      const cityResponse = await APIRequest.getRandomCity();
      randomCityName = filterData.getRandomCityName(cityResponse);
      weatherResponse = await APIRequest.getCityWeather(randomCityName);
      DOMManipulation.updateDisplayedWeather(weatherResponse);
      DOMManipulation.toggleButtonEnabled(randomButton);
    } catch (error) {
      if (error.status === 404 && randomCityName === undefined) {
        // GeoDB API error
        DOMManipulation.changeErrorMessage(
          "Hmm, it seems like we're running into some trouble. Try again!"
        );
      } else if (error.status === 404 && weatherResponse === undefined) {
        // GeoDB gave a city that has no data in OpenWeatherMap API
        setTimeout(submitRandomInput, 1500);
      }
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
    randomButton.addEventListener("click", () => {
      DOMManipulation.toggleButtonEnabled(randomButton), submitRandomInput();
    });
  };
  return { addUserInputListener };
})();

export { userInput };
