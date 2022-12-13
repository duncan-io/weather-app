import { getWeather } from './apiUtlities';

const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
  const searchTerm = searchBar.value;
  console.log(searchTerm);
  const weatherData = await getWeather(searchTerm);
  console.log(await weatherData.weather[0].icon);
  searchBar.value = '';
});
