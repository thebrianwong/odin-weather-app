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
    return Promise.reject(response);
  };
  const getRandomCity = async () => {
    const CITYCOUNT = 508061;
    const randomCityIndex = Math.floor(Math.random() * CITYCOUNT) - 1;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "807ea18ec2msh3a2175b27cf041dp170feajsnf745f5536e94",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=1&includeDeleted=NONE&offset=${randomCityIndex}`,
      options
    );
    if (response.status === 200) {
      const parsedObject = await response.json();
      return parsedObject;
    }
    return Promise.reject(response);
  };
  return { getCityWeather, getRandomCity };
})();

export { APIRequest };
