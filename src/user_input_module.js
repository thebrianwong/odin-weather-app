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
        if (error.status === 404) {
          // OpenWeatherMap API can't find the city due to misspelling or lack of data
          DOMManipulation.changeErrorMessage(
            "Uh oh, looks like something went wrong! Check your spelling or try a different city!"
          );
        } else if (error.status === 429) {
          // OpenWeatherMap API rate limit
          DOMManipulation.changeErrorMessage(
            "Whoa, slow down there partner! Save some weather data for the rest of us!"
          );
        } else if (error.status === 500) {
          DOMManipulation.changeErrorMessage(
            "Something out of our control is broken. Try again later!"
          );
        }
        const errorMessageElement = document.querySelector(".error-message");
        DOMManipulation.toggleElementDisplay(errorMessageElement);
        console.error(Error(error.statusText));
      }
    }
    DOMManipulation.toggleLoadingInProgress();
  };
  const submitRandomInput = async () => {
    let randomCityName;
    let weatherResponse;
    try {
      const cityResponse = await APIRequest.getRandomCity();
      randomCityName = filterData.getRandomCityName(cityResponse);
      weatherResponse = await APIRequest.getCityWeather(randomCityName);
      DOMManipulation.updateDisplayedWeather(weatherResponse);
      DOMManipulation.toggleLoadingInProgress();
    } catch (error) {
      if (error.status === 404 && randomCityName === undefined) {
        // GeoDB API error
        DOMManipulation.changeErrorMessage(
          "Hmm, it seems like we're running into some trouble. Try again!"
        );
      } else if (
        (error.status === 404 && weatherResponse === undefined) ||
        error.status === 429
      ) {
        // GeoDB gave a city that has no data in OpenWeatherMap API
        setTimeout(submitRandomInput, 1500);
      } else if (error.status === 500) {
        DOMManipulation.changeErrorMessage(
          "Something out of our control is broken. Try again later!"
        );
      }
      console.error(Error(`${error.status} ${error.statusText}`));
    }
  };
  const addSearchButtonListener = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", () => {
      // DOMManipulation.changeErrorMessage(""),
      DOMManipulation.resetError(),
        DOMManipulation.toggleLoadingInProgress("Loading"),
        submitUserInput();
    });
  };
  const addInputElementListener = () => {
    const cityInputElement = document.querySelector("#city");
    cityInputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        // DOMManipulation.changeErrorMessage(""),
        DOMManipulation.resetError(),
          DOMManipulation.toggleLoadingInProgress("Loading"),
          submitUserInput();
      }
    });
  };
  const addRandomButtonListener = () => {
    const randomButton = document.querySelector(".random-button");
    randomButton.addEventListener("click", () => {
      // DOMManipulation.changeErrorMessage(""),
      DOMManipulation.resetError(),
        DOMManipulation.toggleLoadingInProgress("Randomizing"),
        submitRandomInput();
    });
  };
  const addTemperatureButtonListeners = () => {
    const tempButtons = Array.from(document.querySelectorAll(".temp-button"));
    tempButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tempButtons.forEach((button) => {
          DOMManipulation.toggleElementDisplay(button);
        });
      });
    });
  };
  const addUserInputListeners = () => {
    addSearchButtonListener();
    addInputElementListener();
    addRandomButtonListener();
    addTemperatureButtonListeners();
  };
  return { addUserInputListeners };
})();

export { userInput };
