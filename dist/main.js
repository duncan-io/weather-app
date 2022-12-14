/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiUtlities.js":
/*!****************************!*\
  !*** ./src/apiUtlities.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "whichCity": () => (/* binding */ whichCity)
/* harmony export */ });
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




/***/ }),

/***/ "./src/domChanges.js":
/*!***************************!*\
  !*** ./src/domChanges.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  const realFeelDisplay = document.getElementById('realFeel');
  const humidityDisplay = document.getElementById('humidity');
  const f = Math.floor(((9 / 5) * (weatherData.temp - 273)) + 32);
  const realFeel = Math.floor(((9 / 5) * (weatherData.feels_like - 273)) + 32);
  const humidity = `${weatherData.humidity}%`;

  tempDisplay.textContent = `${f} degrees`;
  realFeelDisplay.textContent = `${realFeel} degrees`;
  humidityDisplay.textContent = humidity;
}
function updateDom(weatherData) {
  updateIcon(weatherData.weather[0].icon);
  updateTemps(weatherData.main);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDom);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiUtlities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUtlities */ "./src/apiUtlities.js");
/* harmony import */ var _domChanges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domChanges */ "./src/domChanges.js");



const searchBar = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
  if (searchBar.value !== '') {
    const searchTerm = searchBar.value;
    console.log(searchTerm);
    const weatherData = await (0,_apiUtlities__WEBPACK_IMPORTED_MODULE_0__.getWeather)(searchTerm);
    console.log(typeof await weatherData.weather[0].icon);
    (0,_domChanges__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
    searchBar.value = '';
  } else {
    alert('Fill in a city name!');
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLDJEQUEyRCxhQUFhO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxNQUFNO0FBQ2hCLFVBQVUsTUFBTTtBQUNoQixXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLE1BQU07QUFDaEIsVUFBVSxNQUFNOztBQUVoQiwyRUFBMkUsSUFBSSxPQUFPLElBQUk7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVpQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjs7QUFFM0MsK0JBQStCLEdBQUc7QUFDbEMsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQ2hGekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDTjs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3REFBVTtBQUN4QztBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaVV0bGl0aWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbUNoYW5nZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhsb2NhdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25OYW1lfSZsaW1pdD01JmFwcGlkPTdkY2QwYzkzZWViNTU4ZWNiNmU3OGFjNjk2MWE0OGJlYDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2hpY2hDaXR5KGxvY2F0aW9uKSB7XG4gIGNvbnN0IGNpdHkgPSBnZXRDb29yZGluYXRlcyhsb2NhdGlvbik7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY2l0eSk7XG4gIGNvbnN0IGNpdHlEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCB7IGxvbiB9ID0gY2l0eURhdGFbMF07XG4gIGNvbnN0IHsgbGF0IH0gPSBjaXR5RGF0YVswXTtcbiAgcmV0dXJuIHsgbG9uLCBsYXQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCB3aGljaENpdHkobG9jYXRpb24pO1xuXG4gIGNvbnN0IHsgbG9uIH0gPSBjb29yZHM7XG4gIGNvbnN0IHsgbGF0IH0gPSBjb29yZHM7XG5cbiAgY29uc3QgZ2V0TGF0TG9uID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD03ZGNkMGM5M2VlYjU1OGVjYjZlNzhhYzY5NjFhNDhiZWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0TGF0TG9uKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG4vLyBHZXQgQVBJIGZvciA0IGRheSBmb3JlY2FzdCwgZG8gZm9yRWFjaCBmb3IgZWFjaCBvZiB0aGUgNCBkYXlzIHRvIHJldHVybiBkYXRhIGFuZFxuLy8gY3JlYXRlIERPTSBlbGVtZW50cyB0byBzaG93IDQgZGF5IGZvcmVjYXN0XG5cbmV4cG9ydCB7IHdoaWNoQ2l0eSwgZ2V0V2VhdGhlciB9O1xuIiwiY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcblxuZnVuY3Rpb24gdXBkYXRlSWNvbihpY29uKSB7XG4gIHN3aXRjaCAoaWNvbikge1xuICAgIGNhc2UgJzAxZCc6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzAxZEAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMDJkJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDJkQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcwM2QnOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wM2RAMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzA0ZCc6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzA0ZEAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMDlkJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDlkQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcxMGQnOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8xMGRAMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzExZCc6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzExZEAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMTNkJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMTNkQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc1MGQnOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi81MGRAMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzAxbic6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzAxbkAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMDJuJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDJuQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcwM24nOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8wM25AMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzA0bic6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzA0bkAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMDluJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMDluQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcxMG4nOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8xMG5AMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzExbic6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLzExbkAyeC5wbmcnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnMTNuJzpcbiAgICAgIG1haW5JbWFnZS5zcmMgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vMTNuQDJ4LnBuZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc1MG4nOlxuICAgICAgbWFpbkltYWdlLnNyYyA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi81MG5AMngucG5nJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYWluSW1hZ2Uuc3JjID0gJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjAwMDc3MTA2NzI0LTk0Njc1MGVlYWYzYz9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODcwJnE9ODAnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRlbXBzKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBEaXNwbGF5Jyk7XG4gIGNvbnN0IHJlYWxGZWVsRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFsRmVlbCcpO1xuICBjb25zdCBodW1pZGl0eURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3IoKCg5IC8gNSkgKiAod2VhdGhlckRhdGEudGVtcCAtIDI3MykpICsgMzIpO1xuICBjb25zdCByZWFsRmVlbCA9IE1hdGguZmxvb3IoKCg5IC8gNSkgKiAod2VhdGhlckRhdGEuZmVlbHNfbGlrZSAtIDI3MykpICsgMzIpO1xuICBjb25zdCBodW1pZGl0eSA9IGAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuXG4gIHRlbXBEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7Zn0gZGVncmVlc2A7XG4gIHJlYWxGZWVsRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3JlYWxGZWVsfSBkZWdyZWVzYDtcbiAgaHVtaWRpdHlEaXNwbGF5LnRleHRDb250ZW50ID0gaHVtaWRpdHk7XG59XG5mdW5jdGlvbiB1cGRhdGVEb20od2VhdGhlckRhdGEpIHtcbiAgdXBkYXRlSWNvbih3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb24pO1xuICB1cGRhdGVUZW1wcyh3ZWF0aGVyRGF0YS5tYWluKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlRG9tO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9hcGlVdGxpdGllcyc7XG5pbXBvcnQgdXBkYXRlRG9tIGZyb20gJy4vZG9tQ2hhbmdlcyc7XG5cbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKTtcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBpZiAoc2VhcmNoQmFyLnZhbHVlICE9PSAnJykge1xuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgY29uc29sZS5sb2coc2VhcmNoVGVybSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaFRlcm0pO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBhd2FpdCB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb24pO1xuICAgIHVwZGF0ZURvbSh3ZWF0aGVyRGF0YSk7XG4gICAgc2VhcmNoQmFyLnZhbHVlID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ0ZpbGwgaW4gYSBjaXR5IG5hbWUhJyk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9