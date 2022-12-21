const APIRequest = (() => {
  const APIKEY = "a0c9839361f301aa4ff8bb089dde2d79";
  const getCityWeather = async (city) => {
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    // );
    // const parsedObject = await response.json();
    // return parsedObject;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      );
      console.log(response);
      const parsedObject = await response.json();
      return parsedObject;
    } catch (error) {
      console.log(error.cod);
      if (error.cod === "404") {
        console.log(error.message);
      }
    }
  };
  return { getCityWeather };
})();

export { APIRequest };
