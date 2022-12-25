import { APIRequest } from "./API_request_module";
import { userInput } from "./user_input_module";
import { DOMManipulation } from "./DOM_manipulation_module";

(async function initializePage() {
  try {
    const response = await APIRequest.getCityWeather("Hell");
    DOMManipulation.updateDisplayedWeather(response);
  } catch (error) {
    DOMManipulation.addPlaceholderValues();
    console.error(
      Error(
        `${error.status} ${error.statusText}. If you can see this, that means there was an issue with the OpenWeatherMap API!`
      )
    );
  }
})();

userInput.addUserInputListeners();
