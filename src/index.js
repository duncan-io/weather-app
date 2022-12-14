import { getWeather } from './apiUtlities';
import updateDom from './domChanges';

const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
  if (searchBar.value !== '') {
    const searchTerm = searchBar.value;
    console.log(searchTerm);
    const weatherData = await getWeather(searchTerm);
    console.log(typeof await weatherData.weather[0].icon);
    updateDom(weatherData);
    searchBar.value = '';
  } else {
    alert('Fill in a city name!');
  }
});
