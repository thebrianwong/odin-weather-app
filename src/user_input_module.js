import { APIRequest } from "./API_request_module";
import { filterData } from "./filter_data_module";

const userInput = (() => {
  const addSearchButtonListener = () => {
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", async () => {
      const city = document.querySelector("#city").value;
      if (city !== "") {
        try {
          const response = await APIRequest.getCityWeather(city);
          console.log(response);
          console.log(response.weather[0].icon);
          const icon = filterData.getWeatherIconCode(response);
          const img = document.createElement("img");
          img.src = `http://openweathermap.org/img/wn/${icon}.png`;
          const div = document.querySelector("div");
          div.appendChild(img);
          console.log(filterData.getWeatherMain(response));
          console.log(filterData.getWeatherDescription(response));
          console.log(filterData.getTemperature(response));
          console.log(filterData.getTemperatureFahrenheit(response));
          console.log(filterData.getTemperatureCelsius(response));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  return { addSearchButtonListener };
})();

export { userInput };
