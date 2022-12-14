const mainImage = document.getElementById('icon');

function updateIcon(icon) {
  switch (icon) {
    case '01d':
      mainImage.src = 'http://openweathermap.org/img/wn/01d@2x.png';
      break;
    case '02d':
      mainImage.src = 'http://openweathermap.org/img/wn/02d@2x.png';
      break;
    case '03d':
      mainImage.src = 'http://openweathermap.org/img/wn/03d@2x.png';
      break;
    case '04d':
      mainImage.src = 'http://openweathermap.org/img/wn/04d@2x.png';
      break;
    case '09d':
      mainImage.src = 'http://openweathermap.org/img/wn/09d@2x.png';
      break;
    case '10d':
      mainImage.src = 'http://openweathermap.org/img/wn/10d@2x.png';
      break;
    case '11d':
      mainImage.src = 'http://openweathermap.org/img/wn/11d@2x.png';
      break;
    case '13d':
      mainImage.src = 'http://openweathermap.org/img/wn/13d@2x.png';
      break;
    case '50d':
      mainImage.src = 'http://openweathermap.org/img/wn/50d@2x.png';
      break;
    case '01n':
      mainImage.src = 'http://openweathermap.org/img/wn/01n@2x.png';
      break;
    case '02n':
      mainImage.src = 'http://openweathermap.org/img/wn/02n@2x.png';
      break;
    case '03n':
      mainImage.src = 'http://openweathermap.org/img/wn/03n@2x.png';
      break;
    case '04n':
      mainImage.src = 'http://openweathermap.org/img/wn/04n@2x.png';
      break;
    case '09n':
      mainImage.src = 'http://openweathermap.org/img/wn/09n@2x.png';
      break;
    case '10n':
      mainImage.src = 'http://openweathermap.org/img/wn/10n@2x.png';
      break;
    case '11n':
      mainImage.src = 'http://openweathermap.org/img/wn/11n@2x.png';
      break;
    case '13n':
      mainImage.src = 'http://openweathermap.org/img/wn/13n@2x.png';
      break;
    case '50n':
      mainImage.src = 'http://openweathermap.org/img/wn/50n@2x.png';
      break;
    default:
      mainImage.src = 'https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  }
}

function updateTemps(weatherData) {
  const tempDisplay = document.getElementById('tempDisplay');
  const f = ((9 / 5) * (weatherData.temp - 273)) + 32;
  tempDisplay.textContent = f;
}
function updateDom(weatherData) {
  updateIcon(weatherData.weather[0].icon);
  updateTemps(weatherData.main);
}

export default updateDom;
