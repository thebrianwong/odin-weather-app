import { APIRequest } from "./API_request_module";
import { filterData } from "./filter_data_module";
import { DOMManipulation } from "./DOM_manipulation_module";

const userInput = (() => {
  const submitUserInput = async () => {
    const cityInputValue = document.querySelector("#city").value;
    if (cityInputValue !== "") {
      try {
        const response = await APIRequest.getCityWeather(cityInputValue);
        console.log(response);
        DOMManipulation.addWeatherIcon(response);
        DOMManipulation.addWeatherMain(response);
      } catch (error) {
        console.error(Error(error.statusText));
      }
    }
  };
  const addUserInputListener = () => {
    const searchButton = document.querySelector(".search-button");
    const cityInputElement = document.querySelector("#city");
    searchButton.addEventListener("click", submitUserInput);
    cityInputElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        submitUserInput();
      }
    });
  };
  return { addUserInputListener };
})();

export { userInput };
