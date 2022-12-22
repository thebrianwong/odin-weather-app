const APIRequest = (() => {
  const APIKEY = "a0c9839361f301aa4ff8bb089dde2d79";
  const getCityWeather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    );
    if (response.status === 200) {
      const parsedObject = await response.json();
      return parsedObject;
    }
    // network error, change DOM to have error message
  };
  return { getCityWeather };
})();

export { APIRequest };
