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
  const getCountryCode = (data) => data.sys.country;
  const getCountryName = (data) => {
    const countryCode = getCountryCode(data);
    const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    const countryName = regionNames.of(`${countryCode}`);
    return countryName;
  };
  const getRandomCityName = (data) => data.data[0].city;
  return {
    getTemperatureFahrenheit,
    getTemperatureCelsius,
    getWeatherMain,
    getWeatherDescription,
    getWeatherIconCode,
    getCityName,
    getRandomCityName,
    getCountryName,
  };
})();

export { filterData };
