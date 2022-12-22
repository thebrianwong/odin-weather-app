const filterData = (() => {
  const getTemperature = (data) => data.main.temp;
  const getTemperatureFahrenheit = (data) => {
    const kelvin = getTemperature(data);
    const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
    return Math.round(fahrenheit * 100) / 100;
  };
  const getTemperatureCelsius = (data) => {
    const kelvin = getTemperature(data);
    const celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
  };
  const getWeatherMain = (data) => data.weather[0].main;
  const getWeatherDescription = (data) => data.weather[0].description;
  const getWeatherIconCode = (data) => data.weather[0].icon;
  const getCityName = (data) => data.name;
  return {
    getTemperature,
    getTemperatureFahrenheit,
    getTemperatureCelsius,
    getWeatherMain,
    getWeatherDescription,
    getWeatherIconCode,
    getCityName,
  };
})();

export { filterData };
