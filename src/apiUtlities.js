function getCoordinates(locationName) {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=5&appid=7dcd0c93eeb558ecb6e78ac6961a48be`;
}

async function whichCity(location) {
  const city = getCoordinates(location);
  const response = await fetch(city);
  const cityData = await response.json();
  const { lon } = cityData[0];
  const { lat } = cityData[0];
  return { lon, lat };
}

async function getWeather(location) {
  const coords = await whichCity(location);

  const { lon } = coords;
  const { lat } = coords;

  const getLatLon = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7dcd0c93eeb558ecb6e78ac6961a48be`;
  const response = await fetch(getLatLon);
  const weatherData = await response.json();
  console.log(weatherData);
  return weatherData;
}

// Get API for 4 day forecast, do forEach for each of the 4 days to return data and
// create DOM elements to show 4 day forecast

export { whichCity, getWeather };
