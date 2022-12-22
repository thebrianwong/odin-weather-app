import { APIRequest } from "./API_request_module";
import { filterData } from "./filter_data_module";
import { userInput } from "./user_input_module";

// APIRequest.getCityWeather("San Francisco")
//   .then((response) => {
//     console.log(response);
//     console.log(response.weather[0].icon);
//     const icon = filterData.getWeatherIconCode(response);
//     const img = document.createElement("img");
//     img.src = `http://openweathermap.org/img/wn/${icon}.png`;
//     const div = document.querySelector("div");
//     div.appendChild(img);
//     console.log(filterData.getWeatherMain(response));
//     console.log(filterData.getWeatherDescription(response));
//     console.log(filterData.getTemperature(response));
//     console.log(filterData.getTemperatureFahrenheit(response));
//     console.log(filterData.getTemperatureCelsius(response));
//   })
//   .then((response) => {
//     console.log(response);
//   });

userInput.addUserInputListener();
