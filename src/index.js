import { APIRequest } from "./API_request_object";

APIRequest.getCityWeather("San Francisco")
  .then((response) => {
    console.log(response);
    console.log(response.weather[0].icon);
    const { icon } = response.weather[0];
    const img = document.createElement("img");
    img.src = `http://openweathermap.org/img/wn/${icon}.png`;
    const div = document.querySelector("div");
    div.appendChild(img);
  })
  .then((response) => {
    console.log(response);
  });
